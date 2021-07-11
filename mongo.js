// Node Connection to MongoDB
// ==========================

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://user1:Edcrfv123@cluster0.3ygns.mongodb.net/productsDB?retryWrites=true&w=majority';


// Queries
//--------
const createProduct = async (req, res, next) => {

    // Prepare data for insert
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };

    const client = new MongoClient(url);// create MongoDB client

    // Client Connection must be 1) Wrapped in Try and 2) Await
    try {
        await client.connect(); // use client to connect to MDB
        const db = client.db(); // access the database
        const result = db.collection('productsCollection').insertOne(newProduct); // insert data
    } catch (err) {
        return res.json({ message: 'Error with connection' });
    };

    // Close MDB connection
    // --------------------
    client.close();

    // JSON output
    res.json(newProduct);
};


const getProducts = async (req, res, next) => {

    const client = new MongoClient(url);

    let queryProducts;

    try {
        await client.connect();
        const db = client.db();
        queryProducts = await db.collection('productsCollection').find().toArray();
    } catch (err) {
        return res.json({ message: 'No Items Found' });
    };

    client.close();

    res.json(queryProducts);
};


exports.createProduct = createProduct;
exports.getProducts = getProducts;

