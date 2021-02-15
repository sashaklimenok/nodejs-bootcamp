const express = require('express');
const router = express.Router();

//Controllers
const genreController = require('../../controllers/genreController');

//Get catalog home page
router
  .get('/genres', genreController.genreList)
  .get('/genre/create', genreController.genreCreateGet)
  .get('/genre/:id', genreController.genreDetail)
  .get('/genre/:id/delete', genreController.genreDeleteGet)
  .get('/genre/:id/update', genreController.genreUpdateGet);

router
  .post('/genre/create', genreController.genreCreatePost)
  .post('/genre/:id/delete', genreController.genreDeletePost)
  .post('/genre/:id/update', genreController.genreUpdatePost);

module.exports = router;
