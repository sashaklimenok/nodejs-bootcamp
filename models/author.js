const { Schema, model } = require('mongoose');

const AuthorSchema = Schema({
  firstName: { type: String, required: true, maxLength: 100 },
  familyName: { type: String, required: true, maxlength: 100 },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
});

AuthorSchema.virtual('name').get(function () {
  return `${this.familyName}, ${this.firstName}`;
});

AuthorSchema.virtual('lifespan').get(function () {
  return (this.dateOfDeath.getYear() - this.dateOfBirth.getyear()).toString();
});

AuthorSchema.virtual('url').get(function () {
  return `/catalog/author/${this._id}`;
});

module.exports = model('Author', AuthorSchema);
