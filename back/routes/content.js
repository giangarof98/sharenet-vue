//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const contentController = require('../controllers/content');

//class 
//const API = require('../controllers/content');

//router.get('/t', API.fetchAll);

router.get('/homepage', contentController.homepage);
router.get('/contents', contentController.getAll);
//router.get('/create', contentController.createForm);
router.get('/content/:id', contentController.showOne);
router.get('/content/:id/edit', contentController.updateForm);

router.post('/new', contentController.create);

router.put('/content/:id', contentController.update);

router.delete('/content/:id', contentController.delete);

module.exports = router;