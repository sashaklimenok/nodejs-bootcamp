const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');
const async = require('async');

const index = (req, res) => {
  async.parallel(
    {
      bookCount: (callback) => {
        Book.countDocuments({}, callback);
      },
      bookInstanceCount: (callback) => {
        BookInstance.countDocuments({}, callback);
      },
      bookInstanceAvailableCount: (callback) => {
        BookInstance.countDocuments({ status: 'Available' }, callback);
      },
      authorCount: (callback) => {
        Author.countDocuments({}, callback);
      },
      genreCount: (callback) => {
        Genre.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.render('index', {
        title: 'Local Library Home',
        error: err,
        data: results,
      });
    }
  );
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
