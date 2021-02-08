const express = require('express');
const { readFileSync, writeFile } = require('fs');
const { join } = require('path');

const route = express.Router();

const DATA_FILE = join(__dirname, '../dev-data/data/tours.json');
const tours = JSON.parse(readFileSync(DATA_FILE).toString());

const createTour = (req, res) => {
  const tourID = tours.length - 1 + 1;
  const newTour = { id: tourID, ...req.body };
  tours.push(newTour);
  writeFile(DATA_FILE, JSON.stringify(tours), (err) => {
    if (err) {
      console.error(err);
    }
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  });
};

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((item) => item.id === id);
  if (tour) {
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: `Noy found tour with ${id} id`,
    });
  }
};

const updateTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((item) => item.id === id);
  if (tour) {
    res.status(200).json({
      status: 'success',
      data: {
        tour: 'Coming soon...',
      },
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: `Noy found tour with ${id} id`,
    });
  }
};

const deleteTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((item) => item.id === id);
  const filterTours = tours.filter((item) => item.id !== id);
  writeFile(DATA_FILE, JSON.stringify(filterTours), (err) => {
    if (err) {
      console.error(err);
    }
    if (tour) {
      res.status(200).json({
        status: 'success',
        data: null,
      });
    } else {
      res.status(404).json({
        status: 'fail',
        message: `Noy found tour with ${id} id`,
      });
    }
  });
};

route.route('/').post(createTour).get(getAllTours);
route.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = route;
