const express = require('express');

let app = express();

// Middlware
app.use('/admin', (req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Router
app.get('/', (req, res) => {
  res.send('Welcome to index page');
});

app.listen(4000, () => {
  console.log('=> Server listening on port 4000');
});