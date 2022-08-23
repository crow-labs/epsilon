package mono

import (
	"fmt"

	"github.com/crow-labs/epsilon/x/nest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	monoItemPrefix = "monoItem%d"
)

var (
	_ types.ItemI = &Item{}
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
