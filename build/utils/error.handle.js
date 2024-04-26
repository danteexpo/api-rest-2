"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttp = void 0;
const handleHttp = (res, err) => {
    res.status(500);
    res.send({ err });
};
exports.handleHttp = handleHttp;
