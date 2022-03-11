const express = require('express');

let app = express();


// Routes
app.get('/', (req, res) => {
  res.send('Index page');
});
app.get('/about', (req, res) => {
  res.send('About page');
});
app.get('/projects', (req, res) => {
  res.send('Projects page');
});
app.get('/contact', (req, res) => {
  res.send('Contact page');
});

let loggerMiddleware = (req, res, next) => {
  let method = req.method;
  let url = req.url;
  let date = new Date();
  
  // let logger = `${method} ${url} ${date}`;
  res.send(method, url, date);
  next();
}

app.use(loggerMiddleware());

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});