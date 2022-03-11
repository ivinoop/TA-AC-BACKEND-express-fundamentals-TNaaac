const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

let app = express();

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

// 3rd party middlewares
app.use(logger('dev'));
app.use(cookieParser());

// Custom middlewares
app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use((req, res, next) => {
  res.cookie('cookie', 'collected');
  next();
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  // res.send('Index page');
});

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/blog.html', (req, res) => {
  res.sendFile(__dirname + '/blog.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/blog.html');
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html');
});

app.post('/form', (req, res) => {
  res.json(req.body);
});

app.get('/users', (req, res) => {
  res.send('This is users page');
});

// 404 error handler
app.use((req, res, next) => {
  res.send('404: Page not found');
});

// Custom error handler
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('=> Server listening on port 4000');
});