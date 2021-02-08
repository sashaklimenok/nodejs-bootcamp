const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
  path: `./config.env`,
});

const db = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.error(err));

const { PORT } = process.env;
const { HOST } = process.env;

app.listen(PORT, HOST, () => {
  console.log(`App is running on ${HOST}:${PORT}`);
});
