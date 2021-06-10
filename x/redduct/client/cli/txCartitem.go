package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/redduct/x/redduct/types"
)

func CmdCreateCartitem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-cartitem [producthash] [seller] [price] [quantity]",
		Short: "Create a new cartitem",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsProducthash, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsSeller, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsPrice, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argsQuantity, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCartitem(clientCtx.GetFromAddress().String(), argsProducthash, argsSeller, argsPrice, argsQuantity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCartitem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-cartitem [id] [producthash] [seller] [price] [quantity]",
		Short: "Update a cartitem",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsProducthash, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsSeller, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsPrice, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}

			argsQuantity, err := cast.ToInt32E(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCartitem(clientCtx.GetFromAddress().String(), id, argsProducthash, argsSeller, argsPrice, argsQuantity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCartitem() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-cartitem [id]",
		Short: "Delete a cartitem by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteCartitem(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
