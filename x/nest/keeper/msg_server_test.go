package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/crow-labs/epsilon/testutil/keeper"
	"github.com/crow-labs/epsilon/x/nest/keeper"
	"github.com/crow-labs/epsilon/x/nest/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.NestKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
