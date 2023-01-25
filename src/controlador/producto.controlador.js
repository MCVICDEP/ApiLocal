import { getConexion } from "./../bd/db";

const getProducto = async (request, response) => {
    try {
        const conexion = await getConexion();
        const result = await conexion.query("SELECT * FROM productos WHERE flag = '0' order by idproducto ASC")
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

};

const getP1 = async (request, response) => {
    try {
        const { idproducto } = request.params;
        const conexion = await getConexion();
        const result = await conexion.query("SELECT * FROM productos WHERE idproducto = ? and flag = '0'", idproducto)
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

};

const addProducto = async (request, response) => {
    try {
        const { idproducto } = request.params;
        const { cod_producto, nom_producto, desc_producto, precio_producto, cant_producto, img_producto, flag } = request.body;
        if (idproducto === undefined || cod_producto === undefined || desc_producto === undefined || precio_producto === undefined || cant_producto === undefined || img_producto === undefined || flag === undefined) {
            response.status(400).json({ message: "Bad Request. Please fill all field" })
        }
        const producto = {
            idproducto,
            cod_producto,
            nom_producto,
            desc_producto,
            precio_producto,
            cant_producto,
            img_producto,
            flag
        }
        const conexion = await getConexion();
        const result = await conexion.query("UPDATE productos SET ? WHERE idproducto", [producto,idproducto]);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

};

const eliminarProducto = async (request, response) => {
    try {
        const { idproducto } = request.params;
        const conexion = await getConexion();
        const result = await conexion.query("DELETE FROM productos WHERE idproducto = ?", idproducto)
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

};

const updateProducto = async (request, response) => {
    try {
        const { idproducto } = request.params;
        const conexion = await getConexion();
        const result = await conexion.query("DELETE FROM productos WHERE idproducto = ?", idproducto)
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }

};

export const methods = {
    getProducto,
    addProducto,
    getP1,
    eliminarProducto,
    updateProducto
};