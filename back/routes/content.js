//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const contentController = require('../controllers/content');

router.get('/homepage', contentController.homepage);
router.get('/contents', contentController.getAll);
router.get('/create', contentController.createForm);
router.get('/content/:id', contentController.showOne);
router.get('/content/:id/edit', contentController.updateForm);

router.put('/content/:id', contentController.update);

router.post('/create', contentController.create);

router.delete('/content/:id', contentController.delete);

module.exports = router;