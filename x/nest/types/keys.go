package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
)

const (
	// ModuleName defines the module name
	ModuleName = "nest"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_nest"

	// Version defines the current version the IBC module supports
	Version = "nest-1"

	// PortID is the default port id that module binds to
	PortID = "nest"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("nest-port-")
	// KeyNextGlobalBuyerId defines the key to store the next Buyer Id to be used
	KeyNextGlobalBuyerId = []byte{0x01}
	// KeyPrefixBuyers defines the prefix to store buyers
	KeyPrefixBuyers = []byte{0x02}
	// KeyNextGlobalSellerId defines the key to store the next Seller Id to be used
	KeyNextGlobalSellerId = []byte{0x03}
	// KeyPrefixSellers defines the prefix to store sellers
	KeyPrefixSellers = []byte{0x04}
	// KeyNextGlobalVoterId defines the key to store the next Voter Id to be used
	KeyNextGlobalVoterId = []byte{0x05}
	// KeyPrefixVoters defines the prefix to store voters
	KeyPrefixVoters = []byte{0x06}
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

func GetKeyPrefixBuyers(buyerId uint64) []byte {
	return append(KeyPrefixBuyers, sdk.Uint64ToBigEndian(buyerId)...)
}

func GetKeyPrefixSellers(sellerId uint64) []byte {
	return append(KeyPrefixSellers, sdk.Uint64ToBigEndian(sellerId)...)
}

func GetKeyPrefixVoters(voterId uint64) []byte {
	return append(KeyPrefixVoters, sdk.Uint64ToBigEndian(voterId)...)
}
