import { Request, Response } from "express";
import { VoteDto } from "../types/DTO/votes";
import { handleNewVotes } from "../services/votesService";

export const vote = async (
  req: Request<any, any, VoteDto>,
  res: Response
) => {
   try {
     const data = await handleNewVotes(req.body);
     res.status(200).json({ data });
   } catch (error) {
     res.status(500).json({error})
   }
};
