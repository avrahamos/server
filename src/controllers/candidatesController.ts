import { Router } from "express";
import { sid } from "../routers/candidates";

const router = Router();
router.post("/sid", sid);
export default router;
