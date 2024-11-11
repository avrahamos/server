import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string | undefined = req.headers["authorization"];
    if (!token) {
      res.status(401).json({
        erorr: "token must by provided",
      });
      return;
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = payload;
    next();
  } catch (error) {
    res.status(401).json(error as JsonWebTokenError);
  }
};
