const express = require('express');
// const mongoBongo = require('./mongo');
const mongoBongo = require('./mongoose');


const app = express();

app.use(express.json());

app.post('/products', mongoBongo.createProduct);

app.get('/products', mongoBongo.getProducts);

app.listen(3000);