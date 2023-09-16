import { Response, Request } from "express";
import { pool } from "../database";

export const getUsers = async (
	_req: Request,
	res: Response
): Promise<Response> => {
	try {
		const users = await pool.query("SELECT * from users");
		console.log(users.rows);
		return res.status(200).json(users.rows);
	} catch (error) {
		console.log(error);
		return res.status(404).json("Internal server error");
	}
};

export const getUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { id } = req.params;
		const user = await pool.query("SELECT * FROM users WHERE id = $1", [
			parseInt(id),
		]);
		console.log(user.rows);
		return res.status(200).json(user.rows);
	} catch (error) {
		console.log(error);
		return res.status(404).json("Internal server error");
	}
};

export const createUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { name, email } = req.body;
		await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [
			name,
			email,
		]);
		return res.status(200).json({
			message: "User created",
			body: {
				user: {
					name,
					email,
				},
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json("Internal server error");
	}
};

export const editUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { id } = req.params;
		const { name, email } = req.body;
		await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
			name,
			email,
			id,
		]);
		return res.status(200).json({
			message: "User updated",
			body: {
				user: {
					name,
					email,
				},
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json("Internal server error");
	}
};

export const deleteUser = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const { id } = req.params;
		await pool.query("DELETE FROM users WHERE id = $1", [id]);
		return res.status(200).json({
			message: "User deleted",
		});
	} catch (error) {
		console.log(error);
		return res.status(404).json("Internal server error");
	}
};
