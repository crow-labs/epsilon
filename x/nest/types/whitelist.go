package types

import (
	"time"

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

// ItemI defines a basic interface for items to be listed on the marketplace
// by sellers
type ItemI interface {
	proto.Message

	GetId() uint64
	GetTitle() string
	GetDesc() string
	GetSeller() SellerI
	GetPrice() sdk.Coins
	GetCollateral() sdk.Coins
}

// OrderI defines a basic interface for orders
type OrderI interface {
	proto.Message

	GetItem() ItemI
	GetPrice() sdk.Coins
}

// SellOrderI is an extension of the OrderI interface,
// currently adding a method to get the seller
type SellOrderI interface {
	OrderI

	GetSeller() SellerI
}

// BuyOrderI is an extension of the OrderI interface,
// currently adding a method to get the buyer
type BuyOrderI interface {
	OrderI

	GetBuyer() BuyerI
}

// EvidenceI defines an interface to justfity a dispute or rebuttal
type EvidenceI interface {
	proto.Message

	GetExternalLink() string
}

// DisputeI defines an interface to raise a dispute against the other party
// in a marketplace exchange already in escrow (Crow)
type DisputeI interface {
	proto.Message

	GetTitle() string
	GetDesc() string
	GetEvidence() EvidenceI
}

type SentenceI interface {
	proto.Message

	IsPlaintiffGuilty() bool
	IsDefendantGuilty() bool

	GetFundDistribution() (toBuyer sdk.Coins, toSeller sdk.Coins)
	GetJailTime(jailTimeLeft time.Time)

	IsPlaintiffBlacklisted() bool
	IsDefendantBlacklisted() bool
}

// VoteI defines an interface for a vote cast by a voter in regards to a dispute
type VoteI interface {
	proto.Message

	GetDispute() DisputeI
	GetVoter() VoterI
	GetSentence() SentenceI
}

type BuyerI interface {
	MarketActorI

	GetAddress(id string) sdk.AccAddress
	ConfirmBuyOrder(BuyOrderI) error
}

type SellerI interface {
	MarketActorI

	GetAddress(id string) sdk.AccAddress
	ListItem(ItemI) error
	CreateItem(title string, desc string, sellerId string, price sdk.Coins, collateral sdk.Coins) (ItemI, error)
	ConfirmSellOrder(SellOrderI) error
}

type VoterI interface {
	MemberI

	GetVotingPower() sdk.Int
	VoteForDispute(DisputeI, VoteI)
}
