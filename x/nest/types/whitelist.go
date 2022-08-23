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

	GetName() string
	GetId(sdk.AccAddress) string
	String() string
	IsWhitelisted() bool
	IsJailed() bool
	IsBlacklisted() bool
}

// MarketActorI is an extension of the MemberI interface
// and defines the abstraction for market actors (i.e. buyers and sellers)
// to interact with an order based marketplace
type MarketActorI interface {
	MemberI

	GetPrevOrders() []OrderI
	GetActiveOrders() []OrderI
}

// BuyerI defines an interface for a buyer in the marketplace
// (Buyers and sellers are treated independently on the whitelist/jail/blacklist)
type BuyerI interface {
	MarketActorI

	// Lists the order on the marketplace. Buy orders will deposit funds
	// and sell orders will deposit collateral
	OpenOrder(BuyOrderI) error

	// Removes deposit/collateral if order not yet confirmed
	CloseOrder(BuyOrderI) error

	// Removes listing and loose collateral
	CancelOrder(BuyOrderI) error

	GetAddress() string
	ConfirmBuyOrder(BuyOrderI) error
}

// SellerI defines an interface for a seller in the marketplace
type SellerI interface {
	MarketActorI

	// Lists the order on the marketplace. Buy orders will deposit funds
	// and sell orders will deposit collateral
	OpenOrder(SellOrderI) error

	// Removes deposit/collateral if order not yet confirmed
	CloseOrder(SellOrderI) error

	// Removes listing and loose collateral
	CancelOrder(SellOrderI) error

	GetAddress() string
	ListItem(ItemI) error
	CreateItem(title string, desc string, sellerId string, price sdk.Coins, collateral sdk.Coins) (ItemI, error)
	ConfirmSellOrder(SellOrderI) error
}

// VoterI defines an interface for a voter who votes to settle disputes in the marketplace
type VoterI interface {
	MemberI

	GetVotingPower() sdk.Int
	VoteForDispute(DisputeI, VoteI) uint64
}
