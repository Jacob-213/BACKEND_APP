class Venta {
    constructor(data) {
        this.id = data.id;
        this.idUsuario = data.idUsuario;
        this.idProducto = data.idProducto;
        this.fecha = data.fecha;
        this.hora = data.hora;
        this.estatus = data.estatus;
    }

    get getVenta() {
        return {
            idUsuario: this.idUsuario,
            idProducto: this.idProducto,
            fecha: this.fecha,
            hora: this.hora,
            estatus: this.estatus
        };
    }
}

module.exports = Venta;
