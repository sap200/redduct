# Redduct
# ![redduct](./redduct.png)

[try it out](https://cocky-northcutt-489800.netlify.app/).


**redduct** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

## Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

## Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).


## Usage

```
$ git clone github.com/sap200/redduct
```

```
$ go install
```

```
$ redductd 

Stargate CosmosHub App

Usage:
  redductd [command]

Available Commands:
              
              
  add-genesis-account Add a genesis account to genesis.json
  collect-gentxs      Collect genesis txs and output a genesis.json file
  debug               Tool for helping with debugging your application
  export              Export state to JSON
  gentx               Generate a genesis tx carrying a self delegation
  help                Help about any command
  init                Initialize private validator, p2p, genesis, and application configuration files
  keys                Manage your application's keys
  migrate             Migrate genesis to a specified target version
  query               Querying subcommands
  start               Run the full node
  status              Query remote node for status
  tendermint          Tendermint subcommands
  tx                  Transactions subcommands
  unsafe-reset-all    Resets the blockchain database, removes address book files, and resets data/priv_validator_state.json to the genesis state
  validate-genesis    validates the genesis file at the default location or at the location passed as an arg
  version             Print the application binary version information

Flags:
  -h, --help                help for redductd
      --home string         directory for config and data (default "/home/saptarsi/.redduct")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "redductd [command] --help" for more information about a command.
```

### Types

MsgCreateOrder

```go

type MsgCreateOrder struct {
	Creator         string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Producthash     string `protobuf:"bytes,2,opt,name=producthash,proto3" json:"producthash,omitempty"`
	Seller          string `protobuf:"bytes,3,opt,name=seller,proto3" json:"seller,omitempty"`
	Deliveryaddress string `protobuf:"bytes,4,opt,name=deliveryaddress,proto3" json:"deliveryaddress,omitempty"`
	Quantity        int32  `protobuf:"varint,5,opt,name=quantity,proto3" json:"quantity,omitempty"`
	Status          int32  `protobuf:"varint,6,opt,name=status,proto3" json:"status,omitempty"`
	Paid            int32  `protobuf:"varint,7,opt,name=paid,proto3" json:"paid,omitempty"`
	Totalamount     int32  `protobuf:"varint,8,opt,name=totalamount,proto3" json:"totalamount,omitempty"`
}

```

MsgCreateProduct

```go

type MsgCreateProduct struct {
	Creator  string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Ipfshash string `protobuf:"bytes,2,opt,name=ipfshash,proto3" json:"ipfshash,omitempty"`
	Quantity int32  `protobuf:"varint,3,opt,name=quantity,proto3" json:"quantity,omitempty"`
}

```

MsgCreateCartitem

``` go
type MsgCreateCartitem struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Producthash string `protobuf:"bytes,2,opt,name=producthash,proto3" json:"producthash,omitempty"`
	Seller      string `protobuf:"bytes,3,opt,name=seller,proto3" json:"seller,omitempty"`
	Price       int32  `protobuf:"varint,4,opt,name=price,proto3" json:"price,omitempty"`
	Quantity    int32  `protobuf:"varint,5,opt,name=quantity,proto3" json:"quantity,omitempty"`
}
```

Create Product

```
$ redductd tx redduct create-product -h
```

Create cart item

```
$ redductd tx redduct create-cartitem -h
```

create order

```
redductd tx redduct create-order -h
```

Try to make a decentralized ecommerce app as made in vue using the protocol...

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)



