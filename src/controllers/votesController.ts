import { Router } from "express";
import veryfyUser from "../middlewares/veryfyUser";
import { vote } from "../routers/votesRouter";

const router = Router();

router.post('/' , veryfyUser , vote)

export default router;
