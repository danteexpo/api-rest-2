"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
router.get("/users", controllers_1.getUsers);
router.post("/users", controllers_1.createUser);
router.get("/users/:id", controllers_1.getUser);
router.put("/users/:id", controllers_1.editUser);
router.delete("/users/:id", controllers_1.deleteUser);
exports.default = router;
