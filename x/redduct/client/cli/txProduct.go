package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"encoding/hex"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/redduct/x/redduct/types"
	"io/ioutil"
)

func CmdCreateProduct() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-product [sku_file] [quantity]",
		Short: "Create a new product",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsSkuFile, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsQuantity, err := cast.ToInt32E(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			// Read the Sku file
			// skufilecontent returns data in byte slice
			skuFileContent, err := ioutil.ReadFile(argsSkuFile)
			if err != nil {
				return err
			}
			encodedContent := hex.EncodeToString(skuFileContent)

			msg := types.NewMsgCreateProduct(clientCtx.GetFromAddress().String(), encodedContent, argsQuantity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateProduct() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-product [id] [ipfshash] [quantity]",
		Short: "Update a product",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsIpfshash, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsQuantity, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateProduct(clientCtx.GetFromAddress().String(), id, argsIpfshash, argsQuantity)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteProduct() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-product [id]",
		Short: "Delete a product by id",
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

			msg := types.NewMsgDeleteProduct(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
