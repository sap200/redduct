package types

const (
	// ModuleName defines the module name
	ModuleName = "redduct"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_redduct"

	// this line is used by starport scaffolding # ibc/keys/name
)

// this line is used by starport scaffolding # ibc/keys/port

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	ProductKey      = "Product-value-"
	ProductCountKey = "Product-count-"
)

const (
	CartitemKey      = "Cartitem-value-"
	CartitemCountKey = "Cartitem-count-"
)

const (
	OrderKey      = "Order-value-"
	OrderCountKey = "Order-count-"
)
