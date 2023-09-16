import { Pool } from "pg";
require("dotenv").config();

export const pool = new Pool({
	user: "postgres",
	host: "localhost",
	password: process.env.PASSWORD,
	database: "apirest2db",
	port: 5432,
});
