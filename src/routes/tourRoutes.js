const express = require('express');

const route = express.Router();

route.route('/').post().get();
route.route('/:id').get().patch().delete();

module.exports = route;
