var crypto = require("crypto");
function encriptarCodigo(codigo){
    var salt=crypto.randomBytes(32).toString("hex");

    const hash = crypto.scryptSync(codigo,salt,100000,64,"sha512").toString("hex");

    return{
        salt,
        hash
    }
}

function validarCodigo(codigo, hash, salt){
    const hashValidar = crypto.scryptSync(codigo,salt,100000,64,"sha512").toString("hex");
    return hashValidar == hash;
}

module.exports={
    encriptarCodigo,
    validarCodigo
}
