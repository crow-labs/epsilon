package nest_test

import (
	"testing"

	keepertest "github.com/crow-labs/epsilon/testutil/keeper"
	"github.com/crow-labs/epsilon/testutil/nullify"
	"github.com/crow-labs/epsilon/x/nest"
	"github.com/crow-labs/epsilon/x/nest/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.NestKeeper(t)
	nest.InitGenesis(ctx, *k, genesisState)
	got := nest.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	// this line is used by starport scaffolding # genesis/test/assert
}
