const { response } = require('express');
const Contact = require('../models/contacts.model');
const Query = require('../models/queries.model');

// Actions
exports.test = function (req, res) {
  res.send('test succesful');
};
exports.contact_create = function (req, res, next) {
  let contact = new Contact({
    email: req.body.email,
  });

  contact.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Contact Created successfully');
  });
};

exports.query_create = function (req, res, next) {
  let ifDuplicate = checkDuplicate(req.body.email);
  console.log('Duplicate is ' + ifDuplicate);

  let query = new Query({
    email: req.body.email,
    query: req.body.query,
  });

  query.save(function (err) {
    if (err) {
      return next(err);
    }
    if (ifDuplicate) {
      res.send('Welcome Back ! Query Created successfully');
    } else {
      res.send('Query Created Succesfully');
    }
  });
};
exports.contact_details = function (req, res, next) {
  Contact.find({ email: req.body.email }, function (err, contact) {
    console.log(req.params.id);
    if (err) return next(err);
    res.send('found');
    console.log(contact);
  });
};
//Functions
checkDuplicate = (useremail) => {
  let checkUser = Contact.findOne({
    email: useremail,
  });
  return checkUser;
};
