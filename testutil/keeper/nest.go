package keeper

import (
	"testing"

	"github.com/crow-labs/epsilon/x/nest/keeper"
	"github.com/crow-labs/epsilon/x/nest/types"

	"github.com/cosmos/cosmos-sdk/codec"
	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
	"github.com/cosmos/cosmos-sdk/store"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	capabilitykeeper "github.com/cosmos/cosmos-sdk/x/capability/keeper"
	capabilitytypes "github.com/cosmos/cosmos-sdk/x/capability/types"
	typesparams "github.com/cosmos/cosmos-sdk/x/params/types"
	channeltypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
	ibcexported "github.com/cosmos/ibc-go/v3/modules/core/exported"
	"github.com/stretchr/testify/require"
	"github.com/tendermint/tendermint/libs/log"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmdb "github.com/tendermint/tm-db"
)

// nestChannelKeeper is a stub of cosmosibckeeper.ChannelKeeper.
type nestChannelKeeper struct{}

func (nestChannelKeeper) GetChannel(ctx sdk.Context, srcPort, srcChan string) (channel channeltypes.Channel, found bool) {
	return channeltypes.Channel{}, false
}
func (nestChannelKeeper) GetNextSequenceSend(ctx sdk.Context, portID, channelID string) (uint64, bool) {
	return 0, false
}
func (nestChannelKeeper) SendPacket(ctx sdk.Context, channelCap *capabilitytypes.Capability, packet ibcexported.PacketI) error {
	return nil
}
func (nestChannelKeeper) ChanCloseInit(ctx sdk.Context, portID, channelID string, chanCap *capabilitytypes.Capability) error {
	return nil
}

// nestportKeeper is a stub of cosmosibckeeper.PortKeeper
type nestPortKeeper struct{}

func (nestPortKeeper) BindPort(ctx sdk.Context, portID string) *capabilitytypes.Capability {
	return &capabilitytypes.Capability{}
}

func NestKeeper(t testing.TB) (*keeper.Keeper, sdk.Context) {
	logger := log.NewNopLogger()

	storeKey := sdk.NewKVStoreKey(types.StoreKey)
	memStoreKey := storetypes.NewMemoryStoreKey(types.MemStoreKey)

	db := tmdb.NewMemDB()
	stateStore := store.NewCommitMultiStore(db)
	stateStore.MountStoreWithDB(storeKey, sdk.StoreTypeIAVL, db)
	stateStore.MountStoreWithDB(memStoreKey, sdk.StoreTypeMemory, nil)
	require.NoError(t, stateStore.LoadLatestVersion())

	registry := codectypes.NewInterfaceRegistry()
	appCodec := codec.NewProtoCodec(registry)
	capabilityKeeper := capabilitykeeper.NewKeeper(appCodec, storeKey, memStoreKey)

	paramsSubspace := typesparams.NewSubspace(appCodec,
		types.Amino,
		storeKey,
		memStoreKey,
		"NestParams",
	)
	k := keeper.NewKeeper(
		appCodec,
		storeKey,
		memStoreKey,
		paramsSubspace,
		nestChannelKeeper{},
		nestPortKeeper{},
		capabilityKeeper.ScopeToModule("NestScopedKeeper"),
		nil,
		nil,
	)

	ctx := sdk.NewContext(stateStore, tmproto.Header{}, false, logger)

	// Initialize params
	k.SetParams(ctx, types.DefaultParams())

	return k, ctx
}
