const Contact = require('../models/contacts.model');
const Query = require('../models/queries.model')

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Contacts controller!');
};