class ProductManager {
    #products;
    #productDirPath;
    #productFilePath
    #fileSys

    constructor() {
        this.#products = new Array();
        this.#productDirPath = "./files";
        this.#productFilePath = this.#productDirPath + "/Products.json";
        this.#fileSys = require("fs");
    }

    static id = 0


addProduct = async (title, description, price, thumbnail, code, stock)  => {
    
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
            console.log(newProduct);

            await this.#fileSys.promises.writeFile(this.#productFilePath, JSON.stringify(this.#products, null, 2),
            "utf8");

         } catch (error) {
            console.error(`Error creando producto nuevo: ${JSON.stringify(newProduct)}, detalle del error: ${error}`);
         }
}



exist (id){
    return this.#products.find((el) => el.id === id)
}

getProducts(){
    return this.#products;
    }
    
getProductById = async (id) => {
    !this.exist(id) ? console.log("Not Found") : console.log(this.exist(id));
}
    
}


module.exports = ProductManager;