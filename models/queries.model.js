const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QueriesSchema = new Schema({
    email: { type: String, required: true },
    query: { type: String, required: true }
});


// Export the model
module.exports = mongoose.model('Query', QueriesSchema);