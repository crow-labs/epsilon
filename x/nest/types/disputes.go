package types

import (
	"time"

	proto "github.com/gogo/protobuf/proto"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// EvidenceI defines an interface to justfity a dispute or rebuttal
type EvidenceI interface {
	proto.Message

	GetExternalLink() string
}

// DisputeI defines an interface to raise a dispute against the other party
// in a marketplace exchange already in escrow (Crow)
type DisputeI interface {
	proto.Message

	GetTitle() string
	GetDesc() string
	GetEvidence() EvidenceI
}

// SentenceI defines an interface to sentence any party if voted on
type SentenceI interface {
	proto.Message

	IsPlaintiffGuilty() bool
	IsDefendantGuilty() bool

	GetFundDistribution() (toBuyer sdk.Coins, toSeller sdk.Coins)
	GetJailTime(jailTimeLeft time.Time)

	IsPlaintiffBlacklisted() bool
	IsDefendantBlacklisted() bool
}

// VoteI defines an interface for a vote cast by a voter in regards to a dispute
type VoteI interface {
	proto.Message

	GetDispute() DisputeI
	GetVoter() VoterI
	GetSentence() SentenceI
}

// VoterI defines an interface for a voter who votes to settle disputes in the marketplace
type VoterI interface {
	MemberI

	GetVotingPower() sdk.Int
	VoteForDispute(DisputeI, VoteI)
}
