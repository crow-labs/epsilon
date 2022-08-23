package types

import (
	proto "github.com/gogo/protobuf/proto"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// ItemI defines a basic interface for items to be listed on the marketplace
// by sellers
type ItemI interface {
	proto.Message

	GetId() string
	GetTitle() string
	GetDesc() string
	GetSeller() SellerI
	GetPrice() []sdk.Coin
	GetCollateral() []sdk.Coin
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
