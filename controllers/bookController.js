const Book = require('../models/book');

const index = (req, res) => {
  res.send('NOT IMPLEMENTED: Site Home Page');
};

const bookList = (req, res) => {
  res.send('NOT IMPLEMENTED: Book list');
};

const bookDetail = (req, res) => {
  res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

const bookCreateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Book create GET');
};

const bookCreatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Book create POST');
};

const bookDeleteGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Book delete GET');
};

const bookDeletePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Book delete POST');
};

const bookUpdateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Book update GET');
};

const bookUpdatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Book update POST');
};

module.exports = {
  index,
  bookList,
  bookDetail,
  bookCreateGet,
  bookCreatePost,
  bookDeleteGet,
  bookDeletePost,
  bookUpdateGet,
  bookUpdatePost,
};
