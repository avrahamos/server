import candidateModel from "../models/candidateModel";

export const sidInitDB = async () => {
  try {
    const cands = [
      {
        name: "Johnnyuu",
        imageUrl: "https://randomuser.me/api/portraits/med/men/81.jpg",
      },
      {
        name: "Johnnatan",
        imageUrl: "https://randomuser.me/api/portraits/med/men/8o.jpg",
      },
      {
        name: "Yossss",
        imageUrl: "https://randomuser.me/api/portraits/med/men/8.jpg",
      },
      {
        name: "MISTER DONALD",
        imageUrl: "https://randomuser.me/api/portraits/med/men/11.jpg",
      },
    ];
    for (const cand of cands) {
      const newCand = new candidateModel(cand);
      await newCand.save();
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCandidateList = async () => {
  try {
    const list = await candidateModel.find({});
    return list;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
