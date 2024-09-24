const admin = require("firebase-admin");
const keys=require("../keys.json");
admin.initializeApp({
    credential:admin.credential.cert(keys)
});

const proyecto=admin.firestore();
const usuarios=proyecto.collection("usuarios");
const productos = proyecto.collection("productos");

module.exports={
    usuarios,
    productos
}