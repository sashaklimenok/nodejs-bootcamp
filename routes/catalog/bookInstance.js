const express = require('express');
const router = express.Router();

//Controllers
const bookInstanceController = require('../../controllers/bookinstanceController');

router
  .get('/bookinstances', bookInstanceController.bookInstanceList)
  .get('/bookinstance/create', bookInstanceController.bookInstanceCreateGet)
  .get('/bookinstance/:id', bookInstanceController.bookInstanceDetail)
  .get('/bookinstance/:id/delete', bookInstanceController.bookInstanceDeleteGet)
  .get(
    '/bookinstance/:id/update',
    bookInstanceController.bookInstanceUpdateGet
  );

router
  .post('/bookinstance/create', bookInstanceController.bookInstanceCreatePost)
  .post(
    '/bookinstance/:id/delete',
    bookInstanceController.bookInstanceDeletePost
  )
  .post(
    '/bookinstance/:id/update',
    bookInstanceController.bookInstanceUpdatePost
  );

module.exports = router;
