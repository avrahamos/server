import { Request, Response } from "express";
import { getCandidateList, sidInitDB } from "../services/candidatesService";

export const sid = async (req: Request, res: Response) => {
  try {
    const result = await sidInitDB();
    res.status(201).json(result);
    console.log("sid", result);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const list = await getCandidateList();
    res.json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
