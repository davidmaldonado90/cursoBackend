const ProductManager = require("./backend1")

const products = new ProductManager()

const persistProduct = async () => {
        // await products.addProduct("producto de prueba", "este es un producto de prueba", 4000, "sin foto", "abc113",20)
        // await    products.addProduct("producto de prueba 2", "segundo producto de prueba", 5000, "sin foto", "abc113", 400)
        await    products.addProduct("producto de prueba 3", "tercer producto de prueba", 3000, "sin foto", "abc123", 800)
        // await    products.addProduct("producto de prueba 4", "cuarto producto de prueba", 3000, "sin foto", "abc223", 800)
        // await products.getProducts()
        // await products.getProductById(5)
        // await products.deleteProduct(3)
        // await products.updateProduct({title: 'producto de prueba 4',
        // description: 'cuarto producto de prueba',
        // price: "$5000,
        // thumbnail: 'sin foto',
        // code: 'abc223',
        // stock: 800,
        // id: 3})

}

persistProduct()