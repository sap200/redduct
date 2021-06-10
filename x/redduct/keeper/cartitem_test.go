package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/redduct/x/redduct/types"
	"github.com/stretchr/testify/assert"
)

func createNCartitem(keeper *Keeper, ctx sdk.Context, n int) []types.Cartitem {
	items := make([]types.Cartitem, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendCartitem(ctx, items[i])
	}
	return items
}

func TestCartitemGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCartitem(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetCartitem(ctx, item.Id))
	}
}

func TestCartitemExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCartitem(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasCartitem(ctx, item.Id))
	}
}

func TestCartitemRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCartitem(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCartitem(ctx, item.Id)
		assert.False(t, keeper.HasCartitem(ctx, item.Id))
	}
}

func TestCartitemGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCartitem(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCartitem(ctx))
}

func TestCartitemCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCartitem(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetCartitemCount(ctx))
}
