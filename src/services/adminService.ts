import candidateModel from "../models/candidateModel";


export const getCandidatesStatistics = async () => {
  try {
    const statistics = await candidateModel.aggregate([
      {
        $project: {
          name: 1,
          votes: 1,
          imageUrl: 1,
        },
      },
    ]);

    return statistics;
  } catch (error) {
    console.log("Error fetching statistics:", error);
    throw error;
  }
};
