package mono

import (
	"fmt"

	"github.com/crow-labs/epsilon/x/nest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	monoItemPrefix      = "monoItem/%d"
	monoSellOrderPrefix = "monoSellOrder/%d"
	monoBuyOrderPrefix  = "monoBuyOrder/%d"
)

var (
	_ types.ItemI      = &Item{}
	_ types.SellOrderI = &SellOrder{}
)

// NewMonoItem returns an item that can be listed by
// a mono whitelisted seller on the mono market
// Invariants that are assumed and not checked:
// * sellerId is valid and not jailed/blacklisted
// * itemId does not already exist
func NewMonoItem(itemId uint64, title, desc, sellerId string, minPrice, collateral sdk.Coins) Item {

	prefixedId := fmt.Sprintf(monoItemPrefix, itemId)

	item := &Item{
		ItemId:      prefixedId,
		Title:       title,
		Description: desc,
		SellerId:    sellerId,
		MinPrice:    minPrice,
		Collateral:  collateral,
	}

	return *item
}

func (i Item) GetId() string {
	return i.ItemId
}

func (i Item) GetDesc() string {
	return i.Description
}

// TODO: implement
func (i Item) GetSeller() types.SellerI {
	return nil
}

// TODO: implement
func (i Item) GetPrice() []sdk.Coin {
	return []sdk.Coin{}
}

// NewSellOrder returns a sell order that lists an item
// on the mono marketplace from a mono whitelisted seller
// Invariants that are assumed and not check:
// * sellOrderId does not already exist
// * itemId exists
// * sellerId exists and is not jailed/blacklisted
func NewSellOrder(sellOrderId uint64, sellerId, itemId string) SellOrder {

	prefixedId := fmt.Sprintf(monoSellOrderPrefix, sellOrderId)

	sellOrder := &SellOrder{
		SellOrderId: prefixedId,
		SellerId:    sellerId,
		ItemId:      itemId,
	}

	return *sellOrder
}

// TODO: implement
func (so SellOrder) GetItem() types.ItemI {
	return nil
}

// TODO: implement
func (so SellOrder) GetPrice() sdk.Coins {
	return sdk.Coins{}
}

// TODO: implement
func (so SellOrder) GetSeller() types.SellerI {
	return nil
}

// NewBuyOrder returns a buy order for a listed item
// on the mono marketplace from a mono whitelisted buyer
// Invariants that are assumed and not check:
// * buyerOrderId does not already exist
// * itemId exists
// * buyerId exists and is not jailed/blacklisted
func NewBuyOrder(buyOrderId uint64, buyerId, itemId string) BuyOrder {

	prefixedId := fmt.Sprintf(monoBuyOrderPrefix, buyOrderId)

	buyOrder := &BuyOrder{
		BuyOrderId: prefixedId,
		BuyerId:    buyerId,
		ItemId:     itemId,
	}

	return *buyOrder
}

// TODO: implement
func (bo BuyOrder) GetItem() types.ItemI {
	return nil
}

// TODO: implement
func (bo BuyOrder) GetPrice() sdk.Coins {
	return sdk.Coins{}
}

// TODO: implement
func (bo BuyOrder) GetSeller() types.SellerI {
	return nil
}
