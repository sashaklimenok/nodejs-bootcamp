const express = require('express');
const router = express.Router();

//Controllers
const authorController = require('../../controllers/authorController');

router
  .get('/authors', authorController.authorList)
  .get('/author/create', authorController.authorCreateGet)
  .get('/author/:id', authorController.authorDetail)
  .get('/author/:id/delete', authorController.authorDeleteGet)
  .get('/author/:id/update', authorController.authorUpdateGet);

router
  .post('/author/create', authorController.authorCreatePost)
  .post('/author/:id/delete', authorController.authorDeletePost)
  .post('/author/:id/update', authorController.authorUpdatePost);

module.exports = router;
