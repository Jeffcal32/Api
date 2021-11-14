import express from 'express';
import cors from 'cors';
import productosRoutes from './Routes/productos';

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json({
    type: "*/*"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());


productosRoutes(app);

app.get("/agregarProducto", (req,res)=>{
    res.send(console.log("Guardado en el backend"))
    res.send('Producto agregado')
})
app.post("/agregarProducto", (req,res)=>{
    //console.log(req.query);
    console.log(req.body);
    res.send(console.log(" Su producto ha sido agregado y esta a la venta "))
    

});

app.listen(port,()=>{
    console.log('Me Estoy ejecutando en http://localhost:' + port)
});