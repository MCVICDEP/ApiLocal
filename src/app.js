import express  from "express";
import morgan from "morgan";

//RUTAS
import productosRutas from "./rutas/productos.routes";

const app=express();
const cors = require ('cors');

//CONFIG WEB
app.set("port", 9000)
app.use(cors({
    origin:[
        'http://localhost:4200'
    ]
}))

//FUNCION MEDIA
app.use(morgan("dev"));
app.use(express.json());

//USO RUTAS
app.use("/api/productos/", productosRutas);

export default app;