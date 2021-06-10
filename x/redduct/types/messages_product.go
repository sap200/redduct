package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateProduct{}

func NewMsgCreateProduct(creator string, ipfshash string, quantity int32) *MsgCreateProduct {
	return &MsgCreateProduct{
		Creator:  creator,
		Ipfshash: ipfshash,
		Quantity: quantity,
	}
}

func (msg *MsgCreateProduct) Route() string {
	return RouterKey
}

func (msg *MsgCreateProduct) Type() string {
	return "CreateProduct"
}

func (msg *MsgCreateProduct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateProduct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateProduct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateProduct{}

func NewMsgUpdateProduct(creator string, id uint64, ipfshash string, quantity int32) *MsgUpdateProduct {
	return &MsgUpdateProduct{
		Id:       id,
		Creator:  creator,
		Ipfshash: ipfshash,
		Quantity: quantity,
	}
}

func (msg *MsgUpdateProduct) Route() string {
	return RouterKey
}

func (msg *MsgUpdateProduct) Type() string {
	return "UpdateProduct"
}

func (msg *MsgUpdateProduct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateProduct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateProduct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteProduct{}

func NewMsgDeleteProduct(creator string, id uint64) *MsgDeleteProduct {
	return &MsgDeleteProduct{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteProduct) Route() string {
	return RouterKey
}

func (msg *MsgDeleteProduct) Type() string {
	return "DeleteProduct"
}

func (msg *MsgDeleteProduct) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteProduct) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteProduct) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
