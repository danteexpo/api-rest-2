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
exports.deleteCtrl = exports.updateCtrl = exports.postCtrl = exports.getOneCtrl = exports.getAllCtrl = void 0;
const error_handle_1 = require("../utils/error.handle");
const car_1 = require("../services/car");
const getAllCtrl = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, car_1.getCars)();
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ALL');
    }
});
exports.getAllCtrl = getAllCtrl;
const getOneCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, car_1.getCar)(req.params.id);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_GET_ONE');
    }
});
exports.getOneCtrl = getOneCtrl;
const postCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, car_1.insertCar)(req.body);
        res.send({ data: response, user: req.user });
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_POST');
    }
});
exports.postCtrl = postCtrl;
const updateCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, car_1.updateCar)(req.params.id, req.body);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_UPDATE');
    }
});
exports.updateCtrl = updateCtrl;
const deleteCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, car_1.deleteCar)(req.params.id);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, 'ERROR_DELETE');
    }
});
exports.deleteCtrl = deleteCtrl;
