package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/redduct/x/redduct/types"
	"github.com/stretchr/testify/assert"
)

func createNOrder(keeper *Keeper, ctx sdk.Context, n int) []types.Order {
	items := make([]types.Order, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendOrder(ctx, items[i])
	}
	return items
}

func TestOrderGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetOrder(ctx, item.Id))
	}
}

func TestOrderExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasOrder(ctx, item.Id))
	}
}

func TestOrderRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveOrder(ctx, item.Id)
		assert.False(t, keeper.HasOrder(ctx, item.Id))
	}
}

func TestOrderGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllOrder(ctx))
}

func TestOrderCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNOrder(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetOrderCount(ctx))
}
