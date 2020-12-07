const Contact = require('../models/contacts.model');
const Query = require('../models/queries.model')

// Actions

exports.contact_create = function (req, res, next) {
    let contact = new Contact(
        {
            email: req.body.email,
        }
    );

    contact.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Contact Created successfully')
    })
};

exports.query_create = function (req, res, next) {
    let query = new Query(
        {
            email: req.body.email,
            query: req.body.query
        }
    );

    query.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Query Created successfully')
    })
}