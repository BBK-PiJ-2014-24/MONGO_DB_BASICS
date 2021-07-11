const mongoose = require('mongoose');

const Product = require('./models/product');

const url = 'mongodb+srv://user1:Edcrfv123@cluster0.3ygns.mongodb.net/productsDB?retryWrites=true&w=majority';


// Mongoose 'connect' automatically handles the open, close
mongoose.connect(url).then(() => {
    console.log("Connected by Mongoose");
}).catch(() => {
    console.log("Connection Failed");
});


const createProduct = async (req, res, next) => {

    // Instantiate a Model object, passing 
    // the data in the format of the schema as an argument
    //------------------------------------------------------
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    });

    // .save() automatically inserts the new data into the collection' 
    const data = await createdProduct.save();

    res.json(data);
};


const getProducts = async (req, res, next) => {

    const productsQuery = await Product.find().exec(); // exec wraps into promise
    res.json(productsQuery);
}


exports.createProduct = createProduct;
exports.getProducts = getProducts;

