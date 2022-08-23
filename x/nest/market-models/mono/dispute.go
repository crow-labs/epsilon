package mono

import (
	fmt "fmt"

	"github.com/crow-labs/epsilon/x/nest/types"
)

const (
	monoRebuttalPrefix = "MonoRebuttal/%d"
	monoEvidencePrefix = "MonoEvidence/%d"
	monoDisputePrefix  = "MonoDispute/%d"
	monoVotePrefix     = "MonoVote/%d"
)

var (
	_ types.RebuttalI = &Rebuttal{}
	_ types.EvidenceI = &Evidence{}
	_ types.DisputeI  = &Dispute{}
	_ types.SentenceI = &Sentence{}
	_ types.VoteI     = &Vote{}
)

// NewRebuttals returns a new rebuttal for existing evidence for a dispute
// Invariants that are assumed and not checked
//  * rebuttalId does not already exist
//  * disputeId exists and is not yet closed
//  * evidenceId exists
func NewRebuttal(rebuttalId uint64, disputeId, evidenceId string) Rebuttal {
	prefixedId := fmt.Sprintf(monoRebuttalPrefix, rebuttalId)

	rebuttal := &Rebuttal{
		RebuttalId: prefixedId,
		EvidenceId: evidenceId,
		DisputeId:  disputeId,
	}

	return *rebuttal
}

// TODO: implement
func (r Rebuttal) GetDispute() types.DisputeI {
	return nil
}

// TODO: implement
func (r Rebuttal) GetEvidence() types.EvidenceI {
	return nil
}

func (r Rebuttal) GetId() string {
	return r.RebuttalId
}

// NewEvidence returns evidence for a dispute on the mono market
// Invariants that are assumed and not checked
//  * evidenceId exist for the listed disputeId
//  * disputeId exists and is not yet closed
func NewEvidence(evidenceId uint64, disputeId, externalLink string) Evidence {

	prefixedId := fmt.Sprintf(monoEvidencePrefix, evidenceId)

	evidence := &Evidence{
		EvidenceId:   prefixedId,
		DisputeId:    disputeId,
		ExternalLink: externalLink,
	}

	return *evidence
}

// NewDispute returns a dispute for a crow on the mono market
// Invariants that are assumed and not checked
//  * disputeId does not already exist
//  * evidenceId evidenceId exists
func NewDispute(disputeId uint64, title, description, evidenceId string) Dispute {
	prefixedId := fmt.Sprintf(monoDisputePrefix, disputeId)

	dispute := &Dispute{
		DisputeId:   prefixedId,
		Title:       title,
		Description: description,
		EvidenceId:  evidenceId,
	}

	return *dispute
}

func (d Dispute) GetDesc() string {
	return d.Description
}

// TODO: implement
func (d Dispute) GetEvidence() types.EvidenceI {
	return nil
}

func NewSentence(voteId string, plaintifGuilty, defendantGuilty, plaintifBlacklisted, defendantBlacklisted bool, plaintifJailTime, defendantJailTime, amountToReturn uint64) Sentence {
	sentence := &Sentence{
		VoteId:               voteId,
		PlaintifGuilty:       plaintifGuilty,
		DefendantGuilty:      defendantGuilty,
		PlaintifBlacklisted:  plaintifBlacklisted,
		DefendantBlacklisted: defendantBlacklisted,
		PlaintifJailTime:     plaintifJailTime,
		DefendantJailTime:    defendantJailTime,
		AmountToReturn:       amountToReturn,
	}

	return *sentence
}

func (s Sentence) IsPlaintiffGuilty() bool {
	return s.PlaintifGuilty
}

func (s Sentence) IsDefendantGuilty() bool {
	return s.DefendantGuilty
}

func (s Sentence) IsPlaintifBlacklisted() bool {
	return s.PlaintifBlacklisted
}

func (s Sentence) IsDefendantBlacklisted() bool {
	return s.DefendantBlacklisted
}

func NewVote(voteId uint64, voterId, disputeId string, sentence Sentence) Vote {

	prefixedId := fmt.Sprintf(monoVotePrefix, voteId)

	vote := &Vote{
		VoteId:    prefixedId,
		VoterId:   voterId,
		DisputeId: disputeId,
		VoteInfo:  &sentence,
	}

	return *vote
}

func (v Vote) GetDispute() types.DisputeI {
	return nil
}

func (v Vote) GetVoter() types.VoterI {
	return nil
}

func (v Vote) GetSentence() types.SentenceI {
	return v.VoteInfo
}
