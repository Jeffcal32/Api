"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoscontroller_1 = require("../controllers/productoscontroller");
const productosRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.post('/agregarProductos', productoscontroller_1.agregarProductos);
};
exports.default = productosRoutes;
//# sourceMappingURL=productos.js.map