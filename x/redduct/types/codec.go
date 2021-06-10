package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateOrder{}, "redduct/CreateOrder", nil)
	cdc.RegisterConcrete(&MsgUpdateOrder{}, "redduct/UpdateOrder", nil)
	cdc.RegisterConcrete(&MsgDeleteOrder{}, "redduct/DeleteOrder", nil)

	cdc.RegisterConcrete(&MsgCreateCartitem{}, "redduct/CreateCartitem", nil)
	cdc.RegisterConcrete(&MsgUpdateCartitem{}, "redduct/UpdateCartitem", nil)
	cdc.RegisterConcrete(&MsgDeleteCartitem{}, "redduct/DeleteCartitem", nil)

	cdc.RegisterConcrete(&MsgCreateProduct{}, "redduct/CreateProduct", nil)
	cdc.RegisterConcrete(&MsgUpdateProduct{}, "redduct/UpdateProduct", nil)
	cdc.RegisterConcrete(&MsgDeleteProduct{}, "redduct/DeleteProduct", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateOrder{},
		&MsgUpdateOrder{},
		&MsgDeleteOrder{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCartitem{},
		&MsgUpdateCartitem{},
		&MsgDeleteCartitem{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProduct{},
		&MsgUpdateProduct{},
		&MsgDeleteProduct{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
