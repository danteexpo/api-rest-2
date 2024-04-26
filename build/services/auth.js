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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerNewUser = void 0;
const auth_1 = __importDefault(require("../models/auth"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registerNewUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_1.default.findOne({ email: authUser.email });
    if (user)
        return 'EMAIL_ALREADY_IN_USE';
    const encryptedPassword = yield (0, bcrypt_handle_1.encrypt)(authUser.password);
    const registerNewUser = yield auth_1.default.create({
        email: authUser.email,
        password: encryptedPassword,
        name: authUser.name,
        description: authUser.description,
    });
    return registerNewUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_1.default.findOne({ email: authUser.email });
    if (!user)
        return 'NOT_FOUND_USER';
    const passwordHash = user.password;
    const isVerified = yield (0, bcrypt_handle_1.verify)(authUser.password, passwordHash);
    if (!isVerified)
        return 'PASSWORD_INCORRECT';
    const token = (0, jwt_handle_1.generateToken)(user.email);
    const data = {
        user,
        token,
    };
    return data;
});
exports.loginUser = loginUser;
