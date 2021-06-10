package keeper

import (
	"context"
	"fmt"

	"bytes"
	"encoding/hex"
	shell "github.com/ipfs/go-ipfs-api"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/redduct/x/redduct/types"
)

func (k msgServer) CreateProduct(goCtx context.Context, msg *types.MsgCreateProduct) (*types.MsgCreateProductResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Add to ipfs IPFS LOGIC
	skuFileContent, err := hex.DecodeString(msg.Ipfshash) // File content to be read there's name collission vut nvm that
	if err != nil {
		return nil, err
	}

	// connect to local IPFS Client
	sh := shell.NewShell(types.IpfsNodeAddress)

	// Add the ipfs file
	cid, err := sh.Add(bytes.NewReader(skuFileContent), shell.Pin(true))
	if err != nil {
		return nil, sdkerrors.Wrap(types.ErrIpfsAdd, err.Error())
	}

	// If cid is not empty then emit an event
	if cid != "" {
		ctx.EventManager().EmitEvent(types.IpfsAddSuccessEvent(cid))
	} else {
		ctx.EventManager().EmitEvent(types.IpfsAddUnsuccessEvent())
	}

	var product = types.Product{
		Creator:  msg.Creator,
		Ipfshash: cid,
		Quantity: msg.Quantity,
	}

	id := k.AppendProduct(
		ctx,
		product,
	)

	return &types.MsgCreateProductResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateProduct(goCtx context.Context, msg *types.MsgUpdateProduct) (*types.MsgUpdateProductResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var product = types.Product{
		Creator:  msg.Creator,
		Id:       msg.Id,
		Ipfshash: msg.Ipfshash,
		Quantity: msg.Quantity,
	}

	// Checks that the element exists
	if !k.HasProduct(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetProductOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetProduct(ctx, product)

	return &types.MsgUpdateProductResponse{}, nil
}

func (k msgServer) DeleteProduct(goCtx context.Context, msg *types.MsgDeleteProduct) (*types.MsgDeleteProductResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasProduct(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetProductOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveProduct(ctx, msg.Id)

	return &types.MsgDeleteProductResponse{}, nil
}
