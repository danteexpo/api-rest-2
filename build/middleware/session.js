"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwt = (req, res, next) => {
    var _a;
    try {
        const jwt = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ').pop();
        const user = (0, jwt_handle_1.verifyToken)(jwt);
        if (!user) {
            res.status(401);
            res.send('INVALID_JWT_TOKEN');
        }
        req.user = user;
        next();
    }
    catch (e) {
        res.status(400);
        res.send('INVALID_SESSION');
    }
};
exports.checkJwt = checkJwt;
