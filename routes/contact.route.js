const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const contact_controller = require('../controllers/contacts.controller');

//Routes 
router.get('/test', contact_controller.test);
router.post('/create-contact', contact_controller.contact_create);
router.post('/create-query', contact_controller.query_create);
router.get('/check-duplicate', contact_controller.contact_details);
module.exports = router;