import express from "express";
import { getUser, getUsers } from "../controllers/user.js";
const router = express.Router();

router.use("/getUser/:id",getUser);
router.use("/getUsers",getUsers);
export default router;

