import { Router } from "express";
import { getList, sid } from "../routers/candidates";
import veryfyUser from "../middlewares/veryfyUser";

const router = Router();

router.post("/sid", sid);
router.get("/", veryfyUser ,getList);

export default router;
