const express = require("express");
const usuarioRutas = require("./rutas/rutasUsuarios");
const productoRutas = require("./rutas/rutasProductos"); // Importar rutas de productos

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Registrar rutas de usuarios
app.use("/usuarios", usuarioRutas);

// Registrar rutas de productos
app.use("/productos", productoRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
