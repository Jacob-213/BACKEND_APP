const ventasBD = require("./conexion").ventas;

async function nuevaVenta(data) {
    data.estatus = "vendido";
    await ventasBD.doc().set(data);
    return true;
}

async function buscarVentaPorId(id) {
    const venta = await ventasBD.doc(id).get(); // Buscar venta por ID
    if (venta.exists) {
        return { id: venta.id, ...venta.data() }; // Devolver la venta si existe
    } else {
        return null; // Si no existe, devolver null
    }
}

async function mostrarVentas() {
    const ventas = await ventasBD.get();
    let ventasValidas = [];
    ventas.forEach(venta => {
        ventasValidas.push({ id: venta.id, ...venta.data() });
    });
    return ventasValidas;
}

async function cambiarEstatusVenta(id, nuevoEstatus) {
    const venta = await ventasBD.doc(id).get();
    if (venta.exists) {
        await ventasBD.doc(id).update({ estatus: nuevoEstatus });
        return true;
    }
    return false;
}

async function editarVenta(id, data) {
    const ventaExistente = await ventasBD.doc(id).get();
    if (!ventaExistente.exists) {
        return false;
    }
    const ventaActualizada = {
        estatus: data.estatus || ventaExistente.data().estatus,
        fecha: data.fecha || ventaExistente.data().fecha,
        hora: data.hora || ventaExistente.data().hora,
        idUsuario: data.idUsuario || ventaExistente.data().idUsuario,
        idProducto: data.idProducto || ventaExistente.data().idProducto
    };
    await ventasBD.doc(id).update(ventaActualizada);
    return true;
}

module.exports = {
    nuevaVenta,
    buscarVentaPorId,
    mostrarVentas,
    cambiarEstatusVenta,
    editarVenta
};
