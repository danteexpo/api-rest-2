"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.editUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield database_1.pool.query("SELECT * from users");
        console.log(users.rows);
        return res.status(200).json(users.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(404).json("Internal server error");
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield database_1.pool.query("SELECT * FROM users WHERE id = $1", [
            parseInt(id),
        ]);
        console.log(user.rows);
        return res.status(200).json(user.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(404).json("Internal server error");
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email } = req.body;
        yield database_1.pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [
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
    }
    catch (error) {
        console.log(error);
        return res.status(404).json("Internal server error");
    }
});
exports.createUser = createUser;
const editUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        yield database_1.pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [
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
    }
    catch (error) {
        console.log(error);
        return res.status(404).json("Internal server error");
    }
});
exports.editUser = editUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield database_1.pool.query("DELETE FROM users WHERE id = $1", [id]);
        return res.status(200).json({
            message: "User deleted",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(404).json("Internal server error");
    }
});
exports.deleteUser = deleteUser;
