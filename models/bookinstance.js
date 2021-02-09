const { Schema, model } = require('mongoose');

const BookInstanceScheme = Schema({
  bool: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance',
  },
  dueBack: { type: Date, default: Date.now },
});

BookInstanceScheme.virtual('url').get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

module.exports = model('BookInstance', BookInstanceScheme);
