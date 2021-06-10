package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sap200/redduct/x/redduct/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) CartitemAll(c context.Context, req *types.QueryAllCartitemRequest) (*types.QueryAllCartitemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cartitems []*types.Cartitem
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cartitemStore := prefix.NewStore(store, types.KeyPrefix(types.CartitemKey))

	pageRes, err := query.Paginate(cartitemStore, req.Pagination, func(key []byte, value []byte) error {
		var cartitem types.Cartitem
		if err := k.cdc.UnmarshalBinaryBare(value, &cartitem); err != nil {
			return err
		}

		cartitems = append(cartitems, &cartitem)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCartitemResponse{Cartitem: cartitems, Pagination: pageRes}, nil
}

func (k Keeper) Cartitem(c context.Context, req *types.QueryGetCartitemRequest) (*types.QueryGetCartitemResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var cartitem types.Cartitem
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasCartitem(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCartitemIDBytes(req.Id)), &cartitem)

	return &types.QueryGetCartitemResponse{Cartitem: &cartitem}, nil
}
