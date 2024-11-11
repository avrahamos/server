import { Router } from "express";
import veryfyAdmin from "../middlewares/veryfyAdmin";
import { getStatistics } from "../routers/adminRouter";

const router = Router()

router.get("/statistics" , veryfyAdmin , getStatistics);


export default router