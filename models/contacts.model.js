const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactsSchema = new Schema({
    email: { type: String, required: true },
});


// Export the model
module.exports = mongoose.model('Contact', ContactsSchema);