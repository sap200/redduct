package redduct

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/redduct/x/redduct/keeper"
	"github.com/sap200/redduct/x/redduct/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the order
	for _, elem := range genState.OrderList {
		k.SetOrder(ctx, *elem)
	}

	// Set order count
	k.SetOrderCount(ctx, genState.OrderCount)

	// Set all the cartitem
	for _, elem := range genState.CartitemList {
		k.SetCartitem(ctx, *elem)
	}

	// Set cartitem count
	k.SetCartitemCount(ctx, genState.CartitemCount)

	// Set all the product
	for _, elem := range genState.ProductList {
		k.SetProduct(ctx, *elem)
	}

	// Set product count
	k.SetProductCount(ctx, genState.ProductCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all order
	orderList := k.GetAllOrder(ctx)
	for _, elem := range orderList {
		elem := elem
		genesis.OrderList = append(genesis.OrderList, &elem)
	}

	// Set the current count
	genesis.OrderCount = k.GetOrderCount(ctx)

	// Get all cartitem
	cartitemList := k.GetAllCartitem(ctx)
	for _, elem := range cartitemList {
		elem := elem
		genesis.CartitemList = append(genesis.CartitemList, &elem)
	}

	// Set the current count
	genesis.CartitemCount = k.GetCartitemCount(ctx)

	// Get all product
	productList := k.GetAllProduct(ctx)
	for _, elem := range productList {
		elem := elem
		genesis.ProductList = append(genesis.ProductList, &elem)
	}

	// Set the current count
	genesis.ProductCount = k.GetProductCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
