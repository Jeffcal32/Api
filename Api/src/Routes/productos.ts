import { Router } from 'express'
import { agregarProductos } from '../controllers/productoscontroller';

const productosRoutes = (app) =>{
    const router = Router();
    app.use('/', router);
    router.post('/agregarProductos', agregarProductos);
}

export default productosRoutes;