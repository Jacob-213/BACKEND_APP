class Producto {
    constructor(data) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.proveedor = data.proveedor;
        this.codigo = data.codigo;
        this.salt = data.salt;
        this.descripcion = data.descripcion;
        this.categoria = data.categoria;
        this.precio = data.precio;
        this.stock = data.stock;
    }

    // Setters
    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        const nombreRegex = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if (nombreRegex.test(nombre)) {
            this._nombre = nombre;
        }
    }

    set proveedor(proveedor) {
        this._proveedor = proveedor;
    }

    set codigo(codigo) {
        this._codigo = codigo;
    }

    set salt(salt) {
        this._salt = salt;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    set categoria(categoria) {
        this._categoria = categoria;
    }

    set precio(precio) {
        if (typeof precio === 'number' && precio >= 0) {
            this._precio = precio;
        }
    }

    set stock(stock) {
        if (typeof stock === 'number' && stock >= 0) {
            this._stock = stock;
        }
    }

    // Getters
    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get proveedor() {
        return this._proveedor;
    }

    get codigo() {
        return this._codigo;
    }

    get salt() {
        return this._salt;
    }

    get descripcion() {
        return this._descripcion;
    }

    get categoria() {
        return this._categoria;
    }

    get precio() {
        return this._precio;
    }

    get stock() {
        return this._stock;
    }

    get getProducto() {
        const conid = {
            id: this.id,
            nombre: this.nombre,
            proveedor: this.proveedor,
            codigo: this.codigo,
            salt: this.salt,
            descripcion: this.descripcion,
            categoria: this.categoria,
            precio: this.precio,
            stock: this.stock
        };
        const sinid = {
            nombre: this.nombre,
            proveedor: this.proveedor,
            codigo: this.codigo,
            salt: this.salt,
            descripcion: this.descripcion,
            categoria: this.categoria,
            precio: this.precio,
            stock: this.stock
        };
        return this._id == undefined ? sinid : conid;
    }
}

module.exports = Producto;