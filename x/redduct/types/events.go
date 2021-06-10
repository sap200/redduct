package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func IpfsAddSuccessEvent(cid string) sdk.Event {
	return sdk.NewEvent("Ipfs_Add_Successful", sdk.NewAttribute("Ipfs-CID", cid))
}

func IpfsAddUnsuccessEvent() sdk.Event {
	return sdk.NewEvent("Ipfs_Add_Unsuccessful")
}

func ProductDeleteEvent() sdk.Event {
	return sdk.NewEvent("Product_Deleted_Successfully")
}
