import { Request, Response } from "express";
import { createNewUser, userLogin } from "../services/userService";
import { LoginDto, RegisterDto } from "../types/DTO/usersDto";

export const login = async (req: Request, res: Response) => {
  try {
    const loggedUser = await userLogin(req.body as LoginDto);
    res.status(200).json(loggedUser);
    console.log(loggedUser);
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
