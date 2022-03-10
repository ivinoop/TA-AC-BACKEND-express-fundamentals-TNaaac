const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

let app = express();

// 3rd party middlewares
app.use(logger('dev'));
app.use(cookieParser());

// Custom middlewares
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use('/about', (req, res, next) => {
  res.cookie('username', 'vinoo');
  res.send('Hello');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});