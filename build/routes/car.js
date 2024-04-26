"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const car_1 = require("../controllers/car");
const session_1 = require("../middleware/session");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', car_1.getAllCtrl);
router.get('/:id', car_1.getOneCtrl);
router.post('/', session_1.checkJwt, car_1.postCtrl);
router.put('/:id', session_1.checkJwt, car_1.updateCtrl);
router.delete('/:id', session_1.checkJwt, car_1.deleteCtrl);
// checkear si anda todo (con build tmb)
