const express = require('express');
const router = express.Router();

//Controllers
const bookController = require('../../controllers/bookController');

router
  .get('/', bookController.index)
  .get('/books', bookController.bookList)
  .get('/book/create', bookController.bookCreateGet)
  .get('/book/:id', bookController.bookDetail)
  .get('/book/:id/delete', bookController.bookDeleteGet)
  .get('/book/:id/update', bookController.bookUpdateGet);

router
  .post('/book/create', bookController.bookCreatePost)
  .post('/book/:id/delete', bookController.bookDeletePost)
  .post('/book/:id/update', bookController.bookUpdatePost);

module.exports = router;
