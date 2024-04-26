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
exports.loginCtrl = exports.registerCtrl = void 0;
const error_handle_1 = require("../utils/error.handle");
const auth_1 = require("../services/auth");
const registerCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseUser = yield (0, auth_1.registerNewUser)(req.body);
        res.send(responseUser);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_REGISTER_USER');
    }
});
exports.registerCtrl = registerCtrl;
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseUser = yield (0, auth_1.loginUser)(req.body);
        if (responseUser === 'PASSWORD_INCORRECT') {
            res.status(403);
        }
        res.send(responseUser);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_LOGIN_USER');
    }
});
exports.loginCtrl = loginCtrl;
