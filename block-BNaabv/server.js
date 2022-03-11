const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

let app = express();

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static());

// 3rd Party middlewares
app.use(logger('dev'));
app.use(cookieParser());

// Custom middlewares

app.use('/', (req, res, next) => {
  console.log(req.cookies);
  res.cookie('cookie', 'cookie captured 🍪');
  next();
});

app.use('/admin', (req, res, next) => {
  next('Unauthorized user');
});

// Routes
app.get('/', (req, res) => {
  res.send(`<h2>Welcome to Express</h2>`);
});

app.get('/about', (req, res) => {
  res.setHeader('content-type', 'text/plain').send('My name is qwerty');
});

app.post('/form', (req,res) => {
  res.json(req.body);
});

app.post('/json', (req, res) => {
  res.send(req.body);
});

app.get('/users/:username', (req, res) => {
  let username = req.params.username;
  res.setHeader('content-type', 'text/html').send(`<h1>Username: ${username}</h1>`);
});

// 404 handler
app.use((req, res, next) => {
  res.send('404: Page not found');
});

// Custom error
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});