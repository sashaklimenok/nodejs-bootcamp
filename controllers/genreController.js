const Genre = require('../models/genre');

const genreList = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre list');
};

const genreDetail = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

const genreCreateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre create GET');
};

const genreCreatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre create POST');
};

const genreDeleteGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre delete GET');
};

const genreDeletePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre delete POST');
};

const genreUpdateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre update GET');
};

const genreUpdatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Genre update POST');
};

module.exports = {
  genreList,
  genreDetail,
  genreCreateGet,
  genreCreatePost,
  genreDeleteGet,
  genreDeletePost,
  genreUpdateGet,
  genreUpdatePost,
};
