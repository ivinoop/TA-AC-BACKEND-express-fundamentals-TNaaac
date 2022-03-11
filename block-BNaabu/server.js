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

// 404 handler
app.use((req, res, next) => {
  res.send('Error 404: Page not found');
});

// custom error handler
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});