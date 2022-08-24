package keeper

import "github.com/crow-labs/epsilon/x/nest/types"

func (k Keeper) MarshalBuyer(buyer types.BuyerI) ([]byte, error) {
	return k.cdc.MarshalInterface(buyer)
}

func (k Keeper) UnmarshalBuyer(bz []byte) (types.BuyerI, error) {
	var buyer types.BuyerI
	return buyer, k.cdc.UnmarshalInterface(bz, &buyer)
}

func (k Keeper) MarshalSeller(seller types.SellerI) ([]byte, error) {
	return k.cdc.MarshalInterface(seller)
}

func (k Keeper) UnmarshalSeller(bz []byte) (types.SellerI, error) {
	var seller types.SellerI
	return seller, k.cdc.UnmarshalInterface(bz, &seller)
}

func (k Keeper) MarshalVoter(voter types.VoterI) ([]byte, error) {
	return k.cdc.MarshalInterface(voter)
}

func (k Keeper) UnmarshalVoter(bz []byte) (types.VoterI, error) {
	var voter types.VoterI
	return voter, k.cdc.UnmarshalInterface(bz, &voter)
}
