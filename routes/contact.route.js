const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const contact_controller = require('../controllers/contacts.controller');

//Routes 
router.post('/create-contact', contact_controller.contact_create);
router.post('/create-query', contact_controller.query_create);
module.exports = router;