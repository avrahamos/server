import { Request, Response } from "express";
import { createNewUser, getUserData, userLogin } from "../services/userService";
import { LoginDto, ProfileDto, RegisterDto } from "../types/DTO/usersDto";

export const login = async (req: Request, res: Response) => {
  try {
    const loggedUser = await userLogin(req.body as LoginDto);
    res.status(200).json(loggedUser);
  } catch (err) {
    res.status(400).json((err as Error).message);
    console.log(err);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const freshlyCreatedUser = await createNewUser(req.body as RegisterDto);
    res.status(201).json(freshlyCreatedUser);
  } catch (err) {
    res.status(400).json((err as Error).message);
  }
};

export const profile = async (
  req: Request<any, any, ProfileDto>,
  res: Response
) => {
  try {
    const data = await getUserData(req.body)
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json((error as Error).message);
  }
};
