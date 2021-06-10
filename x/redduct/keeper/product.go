package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/redduct/x/redduct/types"
	"strconv"
)

// GetProductCount get the total number of product
func (k Keeper) GetProductCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductCountKey))
	byteKey := types.KeyPrefix(types.ProductCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetProductCount set the total number of product
func (k Keeper) SetProductCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductCountKey))
	byteKey := types.KeyPrefix(types.ProductCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendProduct appends a product in the store with a new id and update the count
func (k Keeper) AppendProduct(
	ctx sdk.Context,
	product types.Product,
) uint64 {
	// Create the product
	count := k.GetProductCount(ctx)

	// Set the ID of the appended value
	product.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&product)
	store.Set(GetProductIDBytes(product.Id), appendedValue)

	// Update product count
	k.SetProductCount(ctx, count+1)

	return count
}

// SetProduct set a specific product in the store
func (k Keeper) SetProduct(ctx sdk.Context, product types.Product) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	b := k.cdc.MustMarshalBinaryBare(&product)
	store.Set(GetProductIDBytes(product.Id), b)
}

// GetProduct returns a product from its id
func (k Keeper) GetProduct(ctx sdk.Context, id uint64) types.Product {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	var product types.Product
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetProductIDBytes(id)), &product)
	return product
}

// HasProduct checks if the product exists in the store
func (k Keeper) HasProduct(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	return store.Has(GetProductIDBytes(id))
}

// GetProductOwner returns the creator of the product
func (k Keeper) GetProductOwner(ctx sdk.Context, id uint64) string {
	return k.GetProduct(ctx, id).Creator
}

// RemoveProduct removes a product from the store
func (k Keeper) RemoveProduct(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	store.Delete(GetProductIDBytes(id))
}

// GetAllProduct returns all product
func (k Keeper) GetAllProduct(ctx sdk.Context) (list []types.Product) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ProductKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Product
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetProductIDBytes returns the byte representation of the ID
func GetProductIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetProductIDFromBytes returns ID in uint64 format from a byte array
func GetProductIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
