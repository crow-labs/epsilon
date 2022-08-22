package keeper_test

import (
	"testing"

	testkeeper "github.com/crow-labs/epsilon/testutil/keeper"
	"github.com/crow-labs/epsilon/x/nest/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.NestKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
