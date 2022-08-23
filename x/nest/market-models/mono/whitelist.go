package mono

import (
	"fmt"

	"github.com/crow-labs/epsilon/x/nest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	whitelistedStatus = "whitelisted"
	jailedStatus      = "jailed"
	blacklistedStatus = "BLACKLISTED"
	monoBuyerPrefix   = "MonoBuyer/%d"
	monoSellerPrefix  = "MonoSeller/%d"
	monoVoterPrefix   = "MonoSeller/%d"
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

// TODO: implement
func (b Buyer) GetId(accAddr sdk.AccAddress) string {
	return ""
}

func (b Buyer) IsWhitelisted() bool {
	return b.Status == whitelistedStatus
}

func (b Buyer) IsJailed() bool {
	return b.Status == jailedStatus
}

func (b Buyer) IsBlacklisted() bool {
	return b.Status == blacklistedStatus
}

// TODO: implement
func (b Buyer) OpenOrder(order types.BuyOrderI) error {
	return nil
}

// TODO: implement
func (b Buyer) CloseOrder(order types.BuyOrderI) error {
	return nil
}

// TODO: implement
func (b Buyer) CancelOrder(order types.BuyOrderI) error {
	return nil
}

// TODO: implement
func (b Buyer) ConfirmBuyOrder(order types.BuyOrderI) error {
	return nil
}

// TODO: implement
func (b Buyer) GetActiveOrders() []types.OrderI {
	return nil
}

// TODO: implement
func (b Buyer) GetPrevOrders() []types.OrderI {
	return nil
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

// TODO: implement
func (s Seller) GetId(accAddr sdk.AccAddress) string {
	return ""
}

func (s Seller) IsWhitelisted() bool {
	return s.Status == whitelistedStatus
}

func (s Seller) IsJailed() bool {
	return s.Status == jailedStatus
}

func (s Seller) IsBlacklisted() bool {
	return s.Status == blacklistedStatus
}

// TODO: implement
func (s Seller) OpenOrder(order types.SellOrderI) error {
	return nil
}

// TODO: implement
func (s Seller) CloseOrder(order types.SellOrderI) error {
	return nil
}

// TODO: implement
func (s Seller) CancelOrder(order types.SellOrderI) error {
	return nil
}

// TODO: implement
func (s Seller) ConfirmSellOrder(order types.SellOrderI) error {
	return nil
}

// TODO: implement
func (s Seller) GetActiveOrders() []types.OrderI {
	return nil
}

// TODO: implement
func (s Seller) GetPrevOrders() []types.OrderI {
	return nil
}

// TODO: implement
func (s Seller) CreateItem(title, desc, sellerId string, price, collateral sdk.Coins) (types.ItemI, error) {
	return nil, nil
}

// TODO: implement
func (s Seller) ListItem(item types.ItemI) error {
	return nil
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

// TODO: implement
func (v Voter) GetId(accAddr sdk.AccAddress) string {
	return ""
}

func (v Voter) IsWhitelisted() bool {
	return v.Status == whitelistedStatus
}

func (v Voter) IsJailed() bool {
	return v.Status == jailedStatus
}

func (v Voter) IsBlacklisted() bool {
	return v.Status == blacklistedStatus
}

// TODO: implement
func (v Voter) GetVotingPower() sdk.Int {
	return sdk.Int{}
}

// TODO: implement
func (v Voter) VoteForDispute(dispute types.DisputeI, vote types.VoteI) uint64 {
	return 0
}
