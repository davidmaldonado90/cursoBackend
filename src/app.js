import express from 'express';
import ProductManager from '../backend1.js'

let productManager = new ProductManager()


// declaramos express
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// endpoint - nuetra API
app.get('/products', async (req, res) => {
    const productos = await productManager.getProducts()
    res.json(productos)
})

app.get('/products/query', async (req, res) => {
    const limit = req.query.limit;
    if (limit === undefined){
        const productQuery = await productManager.getProducts();
        res.json(productQuery);
    }else if (limit > 0){
        const productQuery = await productManager.getProducts();
        const prodFilter = productQuery.slice(0, limit);
        res.json(prodFilter);
    }
        else{
             res.json({error: 'El monto requerido supera la cantidad de productos'});}
});


app.get('/products/:pid', async (req,res) =>{
    const pid = req.params.pid;
    const id = parseInt(pid)
    const prodId = await productManager.getProductById(id)
    if (prodId){
        res.json(prodId)
    }   else{
     res.status(404).json({ message: 'Producto no encontrado' });
    }
        
        
})


// confi puerto de escucha
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})
