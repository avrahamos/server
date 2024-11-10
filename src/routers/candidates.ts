import { Request, Response } from "express";
import { sidInitDB } from "../services/candidatesService";

export const sid = async (req: Request, res: Response) => {
  try {
    await sidInitDB();
    res.sendStatus(201)
  } catch (error) {
    console.log(error);
        res.sendStatus(401);

  }
};
