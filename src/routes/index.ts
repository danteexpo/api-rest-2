import express from "express";
import {
	createUser,
	deleteUser,
	editUser,
	getUser,
	getUsers,
} from "../controllers";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.get("/users/:id", getUser);
router.put("/users/:id", editUser);
router.delete("/users/:id", deleteUser);

export default router;
