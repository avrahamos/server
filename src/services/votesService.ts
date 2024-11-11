import candidateModel from "../models/candidateModel";
import userModel from "../models/userModel";
import { VoteDto } from "../types/DTO/votes";

export const handleNewVotes = async (vote: VoteDto) => {
  try {

    const candidate = await candidateModel.findById(vote.candidateId);
    if (!candidate) {
      return { status: "ERROR", message: "Candidate not found" };
    }

    const user = await userModel.findById(vote.userId);
    if (!user) {
      return { status: "ERROR", message: "User not found" };
    }

    if (user.hasVoted) {
      return { status: "ALREADY_VOTED", message: "User has already voted" };
    }

    await candidateModel.findByIdAndUpdate(vote.candidateId, {
      $inc: { votes: 1 },
    });

    const updatedUser = await userModel.findByIdAndUpdate(
      vote.userId,
      {
        $set: {
          hasVoted: true,
          votedFor: vote.candidateId,
        },
      },
      { new: true } 
    );


    return { status: "DONE" };
  } catch (error) {
    console.error("Error in handleNewVotes:", error);
    return {
      status: "ERROR",
      error: error as Error,
    };
  }
};
