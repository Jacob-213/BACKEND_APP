var rutas = require("express").Router();
var { mostrarProductos, nuevoProducto, borrarProducto, buscarProductoPorID, editarProducto } = require("../bd/productosBD");

rutas.get("/", async (req, res) => {
    const productosValidos = await mostrarProductos();
    console.log(productosValidos);
    res.json(productosValidos);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    const productoValido = await buscarProductoPorID(req.params.id);
    res.json(productoValido);
});

rutas.delete("/borrarProducto/:id", async (req, res) => {
    const productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

rutas.post("/nuevoProducto", async (req, res) => {
    const productoValido = await nuevoProducto(req.body);
    res.json(productoValido);
});

rutas.put("/editarProducto/:id", async (req, res) => {
    const productoActualizado = await editarProducto(req.params.id, req.body);

    if (productoActualizado) {
        res.json({ mensaje: "Producto actualizado con éxito." });
    } else {
        res.status(404).json({ error: "Producto no encontrado." });
    }
});

module.exports = rutas;
