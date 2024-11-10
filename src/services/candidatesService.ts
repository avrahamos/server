import candidateModel from "../models/candidateModel";

export const sidInitDB = async () => {
  try {
    const cands = [
      {
        name: "Johnnyuu",
        image: "https://randomuser.me/api/portraits/med/men/81.jpg",
      },
      {
        name: "Johnnatan",
        image: "https://randomuser.me/api/portraits/med/men/8o.jpg",
      },
      {
        name: "Yossss",
        image: "https://randomuser.me/api/portraits/med/men/8.jpg",
      },
      {
        name: "MISTER DONALD",
        image: "https://randomuser.me/api/portraits/med/men/11.jpg",
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
