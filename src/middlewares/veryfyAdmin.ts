import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      res.status(401).json({ error: "Token must be provided" });
      return; 
    }

    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = payload;

    if (!(payload as any).isAdmin) {
      res.status(403).json({ error: "User is not an admin" });
      return; 
    }

    next(); 
  } catch (error) {
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
