import { Router } from "express";
import {
  addUser,
  deleteUser,
  loginUser,
  updateUser,
} from "../controllers/user.controller.js";
import { ensureAuth } from "../middlewares/authenticated.js";
const router = Router();

router.post("/SignUp", addUser);
router.post("/LogIn", loginUser);
router.put("/updateUser/:id", ensureAuth, updateUser);
router.delete("/deleteUser/:id", ensureAuth, deleteUser);

export default router;
