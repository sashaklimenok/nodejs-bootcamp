const Author = require('../models/author');

const authorList = (req, res) => {
  res.send('NOT IMPLEMENTED: Author list');
};

const authorDetail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author Detail ${req.params.id}`);
};

const authorCreateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Author Create Get');
};

const authorCreatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Author Detail Post');
};

const authorUpdateGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update get');
};

const authorUpdatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Author update POST');
};

const authorDeleteGet = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

const authorDeletePost = (req, res) => {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

module.exports = {
  authorList,
  authorDetail,
  authorCreateGet,
  authorCreatePost,
  authorUpdateGet,
  authorUpdatePost,
  authorDeletePost,
  authorDeleteGet,
};
