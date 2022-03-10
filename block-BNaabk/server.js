const express = require('express');

let app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Index page');
});

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});