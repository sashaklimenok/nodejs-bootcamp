const express = require('express');
const morgan = require('morgan');
const { join } = require('path');

const tourRoute = require('./routes/tourRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(join(__dirname, '../public')));
app.use(express.json());
app.use('/api/v1/tours', tourRoute);

module.exports = app;
