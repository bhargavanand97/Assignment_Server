//app.js
const express = require('express');
const bodyParser = require('body-parser');
const contact = require('./routes/contact.route'); // Imports routes for the products
const app = express();
const cors = require('cors');

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/contactdb';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/contacts', contact);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});