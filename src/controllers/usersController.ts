import { Router } from "express";
import { login, profile, register } from "../routers/userRouter";
import veryfyUser from "../middlewares/veryfyUser";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post('/profile' , veryfyUser , profile)
export default router;
