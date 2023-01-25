import { Router, response } from "express";
import { methods as ProductoControlador } from "../controlador/producto.controlador";

const router=Router();

router.get("/", ProductoControlador.getProducto);
router.get("/:idproducto", ProductoControlador.getP1);
router.post("/", ProductoControlador.addProducto);
router.delete("/:idproducto", ProductoControlador.eliminarProducto);
router.put("/:idproducto", ProductoControlador.updateProducto);

export default router;