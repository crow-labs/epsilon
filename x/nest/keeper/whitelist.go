package keeper

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/crow-labs/epsilon/x/nest/types"
)

func (k Keeper) MarshalBuyer(buyer types.BuyerI) ([]byte, error) {
	return k.cdc.MarshalInterface(buyer)
}

func (k Keeper) UnmarshalBuyer(bz []byte) (types.BuyerI, error) {
	var buyer types.BuyerI
	return buyer, k.cdc.UnmarshalInterface(bz, &buyer)
}

func (k Keeper) GetBuyer(ctx sdk.Context, buyerId uint64) (types.BuyerI, error) {
	store := ctx.KVStore(k.storeKey)
	buyerKey := types.GetKeyPrefixBuyers(buyerId)

	if !store.Has(buyerKey) {
		return nil, fmt.Errorf("buyer with ID %d does not exist", buyerId)
	}

	bz := store.Get(buyerKey)

	buyer, err := k.UnmarshalBuyer(bz)
	if err != nil {
		return nil, err
	}

	return buyer, nil
}

func (k Keeper) setBuyer(ctx sdk.Context, buyer types.BuyerI) error {
	bz, err := k.MarshalBuyer(buyer)
	if err != nil {
		return err
	}

	store := ctx.KVStore(k.storeKey)
	buyerKey := types.GetKeyPrefixBuyers(buyer.GetId())
	store.Set(buyerKey, bz)

	return nil
}

func (k Keeper) MarshalSeller(seller types.SellerI) ([]byte, error) {
	return k.cdc.MarshalInterface(seller)
}

func (k Keeper) UnmarshalSeller(bz []byte) (types.SellerI, error) {
	var seller types.SellerI
	return seller, k.cdc.UnmarshalInterface(bz, &seller)
}

func (k Keeper) GetSeller(ctx sdk.Context, sellerId uint64) (types.SellerI, error) {
	store := ctx.KVStore(k.storeKey)
	sellerKey := types.GetKeyPrefixSellers(sellerId)

	if !store.Has(sellerKey) {
		return nil, fmt.Errorf("seller with ID %d does not exist", sellerId)
	}

	bz := store.Get(sellerKey)

	seller, err := k.UnmarshalSeller(bz)
	if err != nil {
		return nil, err
	}

	return seller, nil
}

func (k Keeper) setSeller(ctx sdk.Context, seller types.SellerI) error {
	bz, err := k.MarshalSeller(seller)
	if err != nil {
		return err
	}

	store := ctx.KVStore(k.storeKey)
	sellerKey := types.GetKeyPrefixSellers(seller.GetId())
	store.Set(sellerKey, bz)

	return nil
}

func (k Keeper) MarshalVoter(voter types.VoterI) ([]byte, error) {
	return k.cdc.MarshalInterface(voter)
}

func (k Keeper) UnmarshalVoter(bz []byte) (types.VoterI, error) {
	var voter types.VoterI
	return voter, k.cdc.UnmarshalInterface(bz, &voter)
}

func (k Keeper) GetVoter(ctx sdk.Context, voterId uint64) (types.VoterI, error) {
	store := ctx.KVStore(k.storeKey)
	voterKey := types.GetKeyPrefixVoters(voterId)

	if !store.Has(voterKey) {
		return nil, fmt.Errorf("voter with ID %d does not exist", voterId)
	}

	bz := store.Get(voterKey)

	voter, err := k.UnmarshalVoter(bz)
	if err != nil {
		return nil, err
	}

	return voter, nil
}

func (k Keeper) setVoter(ctx sdk.Context, voter types.VoterI) error {
	bz, err := k.MarshalVoter(voter)
	if err != nil {
		return err
	}

	store := ctx.KVStore(k.storeKey)
	voterKey := types.GetKeyPrefixVoters(voter.GetId())
	store.Set(voterKey, bz)

	return nil
}
