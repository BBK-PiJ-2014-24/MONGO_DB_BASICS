const express = require('express');
const bodyParser = require('body-parser');
const mongoBongo = require('./mongo');


const app = express();

app.use(express.json());

app.post('/products', mongoBongo.createProduct);

app.get('/products', mongoBongo.getProducts);

app.listen(3000);