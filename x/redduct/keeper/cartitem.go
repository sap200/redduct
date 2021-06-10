package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/redduct/x/redduct/types"
	"strconv"
)

// GetCartitemCount get the total number of cartitem
func (k Keeper) GetCartitemCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemCountKey))
	byteKey := types.KeyPrefix(types.CartitemCountKey)
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

// SetCartitemCount set the total number of cartitem
func (k Keeper) SetCartitemCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemCountKey))
	byteKey := types.KeyPrefix(types.CartitemCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendCartitem appends a cartitem in the store with a new id and update the count
func (k Keeper) AppendCartitem(
	ctx sdk.Context,
	cartitem types.Cartitem,
) uint64 {
	// Create the cartitem
	count := k.GetCartitemCount(ctx)

	// Set the ID of the appended value
	cartitem.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&cartitem)
	store.Set(GetCartitemIDBytes(cartitem.Id), appendedValue)

	// Update cartitem count
	k.SetCartitemCount(ctx, count+1)

	return count
}

// SetCartitem set a specific cartitem in the store
func (k Keeper) SetCartitem(ctx sdk.Context, cartitem types.Cartitem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemKey))
	b := k.cdc.MustMarshalBinaryBare(&cartitem)
	store.Set(GetCartitemIDBytes(cartitem.Id), b)
}

// GetCartitem returns a cartitem from its id
func (k Keeper) GetCartitem(ctx sdk.Context, id uint64) types.Cartitem {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemKey))
	var cartitem types.Cartitem
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCartitemIDBytes(id)), &cartitem)
	return cartitem
}

// HasCartitem checks if the cartitem exists in the store
func (k Keeper) HasCartitem(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemKey))
	return store.Has(GetCartitemIDBytes(id))
}

// GetCartitemOwner returns the creator of the cartitem
func (k Keeper) GetCartitemOwner(ctx sdk.Context, id uint64) string {
	return k.GetCartitem(ctx, id).Creator
}

// RemoveCartitem removes a cartitem from the store
func (k Keeper) RemoveCartitem(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemKey))
	store.Delete(GetCartitemIDBytes(id))
}

// GetAllCartitem returns all cartitem
func (k Keeper) GetAllCartitem(ctx sdk.Context) (list []types.Cartitem) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CartitemKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Cartitem
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCartitemIDBytes returns the byte representation of the ID
func GetCartitemIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCartitemIDFromBytes returns ID in uint64 format from a byte array
func GetCartitemIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
