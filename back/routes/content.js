//Dependecies
const express = require('express');
const router = express.Router();

//Controllers
const contentController = require('../controllers/content');

//Middleware
const CatchAsync = require('../middleware/catchAsync')

//router.get('/homepage', contentController.homepage);
router.get('/', CatchAsync(contentController.getAll));
//router.get('/create', contentController.createForm);
router.post('/create', CatchAsync(contentController.create));
router.get('/:id', CatchAsync(contentController.showOne));
//router.get('/:id/edit', contentController.updateForm);
router.put('/edit/:id', CatchAsync(contentController.update));
router.delete('/:id', CatchAsync(contentController.delete));

module.exports = router;