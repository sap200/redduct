package keeper

import (
	"context"
	"fmt"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/redduct/x/redduct/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateOrder(goCtx context.Context, msg *types.MsgCreateOrder) (*types.MsgCreateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Deduct 1 ipcp every time upload a product.
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	s := strconv.Itoa(int(msg.Totalamount))
	feeCoins, err := sdk.ParseCoinsNormalized(s+ "ipcp")
    if err != nil {
        return nil, err
	}
	
	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
    if err != nil {
        return nil, err
	}

	if err := k.CoinKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
        return nil, err
    }

	var order = types.Order{
		Creator:         msg.Creator,
		Producthash:     msg.Producthash,
		Seller:          msg.Seller,
		Deliveryaddress: msg.Deliveryaddress,
		Quantity:        msg.Quantity,
		Status:          msg.Status,
		Paid:            msg.Paid,
		Totalamount:     msg.Totalamount,
	}

	id := k.AppendOrder(
		ctx,
		order,
	)

	return &types.MsgCreateOrderResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateOrder(goCtx context.Context, msg *types.MsgUpdateOrder) (*types.MsgUpdateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var order = types.Order{
		Creator:         msg.Creator,
		Id:              msg.Id,
		Producthash:     msg.Producthash,
		Seller:          msg.Seller,
		Deliveryaddress: msg.Deliveryaddress,
		Quantity:        msg.Quantity,
		Status:          msg.Status,
		Paid:            msg.Paid,
		Totalamount:     msg.Totalamount,
	}

	// Checks that the element exists
	if !k.HasOrder(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}


	// Checks if the the msg sender is the same as the current owner
	if msg.Seller != k.GetOrderOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetOrder(ctx, order)

	return &types.MsgUpdateOrderResponse{}, nil
}

func (k msgServer) DeleteOrder(goCtx context.Context, msg *types.MsgDeleteOrder) (*types.MsgDeleteOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasOrder(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetOrderOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveOrder(ctx, msg.Id)

	return &types.MsgDeleteOrderResponse{}, nil
}
