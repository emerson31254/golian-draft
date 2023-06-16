import { Router } from "express";
import { addUser, deleteUser, loginUser, updateUser } from "../controllers/user.controller.js";
const router = Router();

router.post("/SignUp", addUser);
router.post("/LogIn", loginUser);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);

export default router;