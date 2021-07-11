const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://user1:Edcrfv123@cluster0.3ygns.mongodb.net/productsDB?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };

    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db();
        const result = db.collection('productsCollection').insertOne(newProduct);
    } catch (err) {
        return res.json({ message: 'Error with connection' });
    };

    client.close();

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

