package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/redduct/x/redduct/types"
)

func (k msgServer) CreateCartitem(goCtx context.Context, msg *types.MsgCreateCartitem) (*types.MsgCreateCartitemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cartitem = types.Cartitem{
		Creator:     msg.Creator,
		Producthash: msg.Producthash,
		Seller:      msg.Seller,
		Price:       msg.Price,
		Quantity:    msg.Quantity,
	}

	id := k.AppendCartitem(
		ctx,
		cartitem,
	)

	return &types.MsgCreateCartitemResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateCartitem(goCtx context.Context, msg *types.MsgUpdateCartitem) (*types.MsgUpdateCartitemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var cartitem = types.Cartitem{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Producthash: msg.Producthash,
		Seller:      msg.Seller,
		Price:       msg.Price,
		Quantity:    msg.Quantity,
	}

	// Checks that the element exists
	if !k.HasCartitem(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetCartitemOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetCartitem(ctx, cartitem)

	return &types.MsgUpdateCartitemResponse{}, nil
}

func (k msgServer) DeleteCartitem(goCtx context.Context, msg *types.MsgDeleteCartitem) (*types.MsgDeleteCartitemResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasCartitem(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetCartitemOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveCartitem(ctx, msg.Id)

	return &types.MsgDeleteCartitemResponse{}, nil
}
