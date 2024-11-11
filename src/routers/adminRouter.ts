import { Request, Response } from "express";
import { getCandidatesStatistics } from "../services/adminService";

export const getStatistics = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await getCandidatesStatistics();
    if (!result) {
      res.status(400).json();
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch candidates statistics" });
  }
};
