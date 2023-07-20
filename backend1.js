import fs from "fs"

class ProductManager {
    #products;
    #productDirPath;
    #productFilePath
    #fileSys

    constructor() {
        this.#products = new Array();
        this.#productDirPath = "../files";
        this.#productFilePath = this.#productDirPath + "/Products.json";
        this.#fileSys = fs;
    }

    static id = 0


addProduct = async (title, description, price, thumbnail, code, stock)  => {
    
    //se verifica que el codigo del producto no este
    if (this.#products.find((el) => el.code === code)){
        console.log (`el codigo ${code} ya existe`);
        return;
    ;
    }
    ProductManager.id++;
    const newProduct = {
        title, 
        description, 
        price, 
        thumbnail, 
        code, 
        stock,
    } 

    // if (!Object.values(newProduct).includes(undefined)){
    //      this.#products.push({id : ProductManager.id, ...newProduct, }) ;
    //     }
    //      else {
    //         console.log("se deben rellenar todos los campos");
    //      } 

         try {
             await this.#fileSys.promises.mkdir(this.#productDirPath, {recursive : true})

             if(!this.#fileSys.existsSync(this.#productFilePath)){
                await this.#fileSys.promises.writeFile(this.#productFilePath, "[]")
             }

            let files = await this.#fileSys.promises.readFile(this.#productFilePath, "utf-8")
            this.#products = JSON.parse(files)
            this.#products.push({...newProduct, id: ProductManager.id});

            await this.#fileSys.promises.writeFile(this.#productFilePath, JSON.stringify(this.#products, null, 2),
            "utf8");
            console.log(`producto ${title} agregado correctamente!`);

         } catch (error) {
            console.error(`Error creando producto nuevo: ${JSON.stringify(newProduct)}, detalle del error: ${error}`);
         }
}

readProducts = async () =>{
    let result = await this.#fileSys.promises.readFile(this.#productFilePath, "utf-8")
    return JSON.parse(result)
}

getProducts = async () => {
    const result2 = await this.readProducts()
    return result2;
;
}
    
getProductById = async (id) => {
    const result3 = await this.readProducts()
    const foundProduct = result3.find((el) => el.id === id)
    if(foundProduct){
        return foundProduct
    } 
    else{
        return null
    } 

}

deleteProduct = async (id) => {
    const delProd = await this.readProducts()
    const filter = delProd.filter(el => el.id != id)
    
    await this.#fileSys.promises.writeFile(this.#productFilePath, JSON.stringify(filter)); 
    console.log("producto eliminado");
    
}

updateProduct = async (id, ...prod) => {
    await this.deleteProduct(id)
    let prodOld = await this.readProducts()
    let prodUpdate = [...prod, id, ...prodOld];
    await this.#fileSys.promises.writeFile(this.#productFilePath, JSON.stringify(prodUpdate))
}
    
}

export default ProductManager;