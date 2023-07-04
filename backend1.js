class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0

addProduct(title, description, price, thumbnail, code, stock) {
    
    if (this.products.find((el) => el.code === code)){
        console.log (`el codigo ${code} ya existe`);
        return;
    ;
    }
    
    
    const newProduct = {
        title, 
        description, 
        price, 
        thumbnail, 
        code, 
        stock,
    }

    if (!Object.values(newProduct).includes(undefined)){
         ProductManager.id++;
         this.products.push({...newProduct, id :ProductManager.id}) ;
        }
         else {
            console.log("se deben rellenar todos los campos");
         } 
}


exist (id){
    return this.products.find((el) => el.id === id)
}

getProducts(){
    return this.products;
    }
    
getProductById(id) {
    !this.exist(id) ? console.log("Not Found") : console.log(this.exist(id));
}
    
}
    
const productos = new ProductManager();


productos.addProduct("producto de prueba", "este es un producto de prueba", 4000, "sin foto", "abc133",)
productos.addProduct("producto de prueba 2", "segundo producto de prueba", 5000, "sin foto", "abc123", 400)

console.table(productos.getProducts());


productos.getProductById(2)