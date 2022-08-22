package keeper

import (
	"github.com/crow-labs/epsilon/x/nest/types"
)

var _ types.QueryServer = Keeper{}
