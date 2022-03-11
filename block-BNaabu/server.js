const express = require('express');
const logger = require('morgan');

let app = express();

app.use(logger('dev'));

app.use('/admin', (req, res, next) => {
  res.send('Unathorized access');
  next();
});

app.get('/', (req, res) => {
  res.send('Index page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.use((req, res, next) => {
  next('Error 404: Page not found');
});

app.use((err, req, res, next) => {
  // console.log(err);
  res.send(err);
});

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});