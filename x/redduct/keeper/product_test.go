package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/redduct/x/redduct/types"
	"github.com/stretchr/testify/assert"
)

func createNProduct(keeper *Keeper, ctx sdk.Context, n int) []types.Product {
	items := make([]types.Product, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendProduct(ctx, items[i])
	}
	return items
}

func TestProductGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProduct(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetProduct(ctx, item.Id))
	}
}

func TestProductExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProduct(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasProduct(ctx, item.Id))
	}
}

func TestProductRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProduct(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveProduct(ctx, item.Id)
		assert.False(t, keeper.HasProduct(ctx, item.Id))
	}
}

func TestProductGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProduct(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllProduct(ctx))
}

func TestProductCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNProduct(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetProductCount(ctx))
}
