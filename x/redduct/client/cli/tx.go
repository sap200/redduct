package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/redduct/x/redduct/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdCreateOrder())
	cmd.AddCommand(CmdUpdateOrder())
	cmd.AddCommand(CmdDeleteOrder())

	cmd.AddCommand(CmdCreateCartitem())
	cmd.AddCommand(CmdUpdateCartitem())
	cmd.AddCommand(CmdDeleteCartitem())

	cmd.AddCommand(CmdCreateProduct())
	cmd.AddCommand(CmdUpdateProduct())
	cmd.AddCommand(CmdDeleteProduct())

	return cmd
}
