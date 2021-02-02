const { readFileSync, writeFile } = require('fs');
const { join } = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const HOST = '127.0.0.1';
const DATA_FILE = join(__dirname, '/dev-data/data/tours.json');

app.use(express.json());

const tours = JSON.parse(readFileSync(DATA_FILE).toString());

app.post('/api/v1/tours/', (req, res) => {
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
});

app.get('/api/v1/tours/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tours,
    },
  });
});

app.get('/api/v1/tours/:id', (req, res) => {
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
});

app.patch('/api/v1/tours/:id', (req, res) => {
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
});

app.delete('/api/v1/tours/:id', (req, res) => {
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
});

app.listen(PORT, HOST, () => {
  console.log(`App is running on ${HOST}:${PORT}`);
});
