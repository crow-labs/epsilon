package mono

import "github.com/crow-labs/epsilon/x/nest/types"

const (
	whitelistedStatus = "whitelisted"
)

var (
	_ types.BuyerI  = &Buyer{}
	_ types.SellerI = &Seller{}
	_ types.VoterI  = &Voter{}
)

// NewMonoBuyer returns a buyer for the mono whitelist
// Invariants that are assumed and not checked:
//  * buyerId doesn't already exist
func NewMonoBuyer(buyerId uint64, name, status, address string) Buyer {

	activeOrders := make(map[uint64]types.BuyOrderI)
	completedOrders := make(map[uint64]types.BuyOrderI)

	buyer := &Buyer{
		Name:             name,
		BuyerId:          buyerId,
		Status:           whitelistedStatus,
		Address:          address,
		ActiveOrderId:    activeOrders,
		CompletedOrderId: completedOrders,
	}

	return buyer
}
