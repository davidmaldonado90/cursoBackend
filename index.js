const ProductManager = require("./backend1")

const products = new ProductManager()


products.addProduct("producto de prueba", "este es un producto de prueba", 4000, "sin foto", "abc133",20)
products.addProduct("producto de prueba 2", "segundo producto de prueba", 5000, "sin foto", "abc123", 400)
products.addProduct("producto de prueba 3", "tercer producto de prueba", 3000, "sin foto", "abc223", 800)
products.addProduct("producto de prueba 4", "cuarto producto de prueba", 3000, "sin foto", "abc223", 800)
