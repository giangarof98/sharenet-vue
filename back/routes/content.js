//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const contentController = require('../controllers/content');

//class 
//const API = require('../controllers/content');

//router.get('/t', API.fetchAll);

//router.get('/homepage', contentController.homepage);
router.get('/', contentController.getAll);
//router.get('/create', contentController.createForm);
router.post('/create', contentController.create);
router.get('/:id', contentController.showOne);
router.get('/:id/edit', contentController.updateForm);
router.put('/:id', contentController.update);
router.delete('/:id', contentController.delete);

module.exports = router;