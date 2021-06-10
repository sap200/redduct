package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCartitem{}

func NewMsgCreateCartitem(creator string, producthash string, seller string, price int32, quantity int32) *MsgCreateCartitem {
	return &MsgCreateCartitem{
		Creator:     creator,
		Producthash: producthash,
		Seller:      seller,
		Price:       price,
		Quantity:    quantity,
	}
}

func (msg *MsgCreateCartitem) Route() string {
	return RouterKey
}

func (msg *MsgCreateCartitem) Type() string {
	return "CreateCartitem"
}

func (msg *MsgCreateCartitem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCartitem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCartitem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCartitem{}

func NewMsgUpdateCartitem(creator string, id uint64, producthash string, seller string, price int32, quantity int32) *MsgUpdateCartitem {
	return &MsgUpdateCartitem{
		Id:          id,
		Creator:     creator,
		Producthash: producthash,
		Seller:      seller,
		Price:       price,
		Quantity:    quantity,
	}
}

func (msg *MsgUpdateCartitem) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCartitem) Type() string {
	return "UpdateCartitem"
}

func (msg *MsgUpdateCartitem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCartitem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCartitem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCartitem{}

func NewMsgDeleteCartitem(creator string, id uint64) *MsgDeleteCartitem {
	return &MsgDeleteCartitem{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCartitem) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCartitem) Type() string {
	return "DeleteCartitem"
}

func (msg *MsgDeleteCartitem) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCartitem) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCartitem) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
