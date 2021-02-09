const { Schema, model } = require('mongoose');

const GenreSchema = Schema({
  name: { type: String, required: true, maxLength: 100, minLength: 3 },
});

GenreSchema.virtual('url').get(function () {
  return `/catalog/genre/${this._id}`;
});

module.exports = model('Genre', GenreSchema);
