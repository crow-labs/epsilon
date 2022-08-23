package types

import (
	proto "github.com/gogo/protobuf/proto"

	//"github.com/cosmos/cosmos-sdk/types/address"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// MemberI defines a basic interface for whitelisted members to act
// in a variety of different roles with an independent whitelist for each role
type MemberI interface {
	proto.Message

	GetName(id string) (string, error)
	GetId(AccAddr sdk.AccAddress) string
	String() string
	IsActive(id string, ctx sdk.Context) bool
	IsJailed(id string, ctx sdk.Context) bool
	IsBlacklisted(id string, ctx sdk.Context) bool
}

// MarketActorI is an extension of the MemberI interface
// and defines the abstraction for market actors (i.e. buyers and sellers)
// to interact with an order based marketplace
type MarketActorI interface {
	MemberI

	GetPrevOrders() []OrderI
	GetActiveOrders() []OrderI

	// Lists the order on the marketplace. Buy orders will deposit funds
	// and sell orders will deposit collateral
	OpenOrder(OrderI) error

	// Removes deposit/collateral if order not yet confirmed
	CloseOrder(OrderI) error

	// Removes listing and loose collateral
	CancelOrder(OrderI) error
}

// BuyerI defines an interface for a buyer in the marketplace
// (Buyers and sellers are treated independently on the whitelist/jail/blacklist)
type BuyerI interface {
	MarketActorI

	GetAddress(id string) sdk.AccAddress
	ConfirmBuyOrder(BuyOrderI) error
}

// SellerI defines an interface for a seller in the marketplace
type SellerI interface {
	MarketActorI

	GetAddress(id string) sdk.AccAddress
	ListItem(ItemI) error
	CreateItem(title string, desc string, sellerId string, price sdk.Coins, collateral sdk.Coins) (ItemI, error)
	ConfirmSellOrder(SellOrderI) error
}
