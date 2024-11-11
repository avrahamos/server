import candidateModel from "../models/candidateModel";
import userModel from "../models/userModel";
import { VoteDto } from "../types/DTO/votes";

export const handleNewVotes = async (vote: VoteDto) => {
  try {
    await candidateModel.findByIdAndUpdate(vote.candidateId, {
      $inc: { votes: 1 },
    });
    await userModel.findByIdAndUpdate(vote.userId, {
      $set: {
        hasVoted: true,

        votedFor: vote.candidateId,
      },
    });
    return { status: "DONE" };
  } catch (error) {
    return {
      status: "ERROR",
      error: error as Error,
    };
  }
};
