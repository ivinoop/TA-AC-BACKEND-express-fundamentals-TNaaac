const express = require('express');

let app = express();

// Custom middleware
app.use((req, res, next) => {
  let date = new Date;
  console.log(req.method, req.url, date);
  next();
});

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



app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});