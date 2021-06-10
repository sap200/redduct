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

func CmdCreateOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-order [producthash] [seller] [deliveryaddress] [quantity] [status] [paid] [totalamount]",
		Short: "Create a new order",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsProducthash, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsSeller, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsDeliveryaddress, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsQuantity, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}
			argsStatus, err := cast.ToInt32E(args[4])
			if err != nil {
				return err
			}
			argsPaid, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}
			argsTotalamount, err := cast.ToInt32E(args[6])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateOrder(clientCtx.GetFromAddress().String(), argsProducthash, argsSeller, argsDeliveryaddress, argsQuantity, argsStatus, argsPaid, argsTotalamount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-order [id] [producthash] [seller] [deliveryaddress] [quantity] [status] [paid] [totalamount]",
		Short: "Update a order",
		Args:  cobra.ExactArgs(8),
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

			argsDeliveryaddress, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			argsQuantity, err := cast.ToInt32E(args[4])
			if err != nil {
				return err
			}

			argsStatus, err := cast.ToInt32E(args[5])
			if err != nil {
				return err
			}

			argsPaid, err := cast.ToInt32E(args[6])
			if err != nil {
				return err
			}

			argsTotalamount, err := cast.ToInt32E(args[7])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateOrder(clientCtx.GetFromAddress().String(), id, argsProducthash, argsSeller, argsDeliveryaddress, argsQuantity, argsStatus, argsPaid, argsTotalamount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteOrder() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-order [id]",
		Short: "Delete a order by id",
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

			msg := types.NewMsgDeleteOrder(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
