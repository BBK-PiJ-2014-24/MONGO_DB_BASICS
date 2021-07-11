const mongoose = require('mongoose');


// A Model binds a schema to a collection
// ======================================

// Create the Schema for the MDB Colleaction
// ----------------------------------------
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

// +++ Bind the Schema to the Collection (Collection, Schema) +++
module.exports = mongoose.model('Product', productSchema);


