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
exports.deleteCar = exports.updateCar = exports.insertCar = exports.getCar = exports.getCars = void 0;
const cars_1 = __importDefault(require("../models/cars"));
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseCars = yield cars_1.default.find({});
    return responseCars;
});
exports.getCars = getCars;
const getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseCar = yield cars_1.default.findOne({ _id: id });
    return responseCar;
});
exports.getCar = getCar;
const insertCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    const responseCar = yield cars_1.default.create(car);
    return responseCar;
});
exports.insertCar = insertCar;
const updateCar = (id, car) => __awaiter(void 0, void 0, void 0, function* () {
    const responseCar = yield cars_1.default.findOneAndUpdate({ _id: id }, car, {
        new: true,
    });
    return responseCar;
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseCar = yield cars_1.default.deleteOne({ _id: id });
    return responseCar;
});
exports.deleteCar = deleteCar;
