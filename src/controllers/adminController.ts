import { Router } from "express";
import { getStatistics } from "../routers/adminRouter";
import veryfyAdmin from "../middlewares/veryfyAdmin";

const router = Router()

router.get("/statistics" , veryfyAdmin , getStatistics);


export default router