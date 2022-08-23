package mono

import (
	"fmt"

	"github.com/crow-labs/epsilon/x/nest/types"
)

const (
	whitelistedStatus = "whitelisted"
	monoBuyerPrefix   = "MonoBuyer%d/"
	monoSellerPrefix  = "MonoSeller%d/"
	monoVoterPrefix   = "MonoSeller%d/"
)

var (
	_ types.BuyerI  = &Buyer{}
	_ types.SellerI = &Seller{}
	_ types.VoterI  = &Voter{}
)

// NewMonoBuyer returns a buyer for the mono whitelist
// Invariants that are assumed and not checked:
//  * buyerId doesn't already exist
func NewMonoBuyer(buyerId uint64, name, status, address, contactInfo string) Buyer {

	activeOrders := make([]uint64, 0)
	completedOrders := make([]uint64, 0)

	prefixedId := fmt.Sprintf(monoBuyerPrefix, buyerId)

	buyer := &Buyer{
		Name:             name,
		BuyerId:          prefixedId,
		Status:           whitelistedStatus,
		Address:          address,
		ActiveOrderId:    activeOrders,
		CompletedOrderId: completedOrders,
		ContactInfo:      contactInfo,
	}

	return *buyer
}

// NewMonoSeller returns a seller for the mono whitelist
// Invariants that are assumed but not checked:
//  * sellerId doesn't already exist
func NewMonoSeller(sellerId uint64, name, status, address, contactInfo string) Seller {

	activeOrders := make([]uint64, 0)
	completedOrders := make([]uint64, 0)
	activeItems := make([]*Item, 0)

	prefixedId := fmt.Sprintf(monoSellerPrefix, sellerId)

	seller := &Seller{
		Name:             name,
		SellerId:         prefixedId,
		Status:           whitelistedStatus,
		Address:          address,
		ActiveOrderId:    activeOrders,
		ActiveItems:      activeItems,
		CompletedOrderId: completedOrders,
		ContactInfo:      contactInfo,
	}

	return *seller
}

// NewMonoVoter returns a voter for the mono whitelist
// Invariants that are assumed but not checked:
//  * voterId doesn't already exist
func NewMonoVoter(voterId uint64, name, status, address string) Voter {
	activeVotes := make([]*Vote, 0)
	completedVotes := make([]*Vote, 0)

	prefixedId := fmt.Sprintf(monoVoterPrefix, voterId)

	voter := &Voter{
		Name:           name,
		VoterId:        prefixedId,
		Status:         status,
		Address:        address,
		ActiveVotes:    activeVotes,
		CompletedVotes: completedVotes,
	}

	return *voter
}
