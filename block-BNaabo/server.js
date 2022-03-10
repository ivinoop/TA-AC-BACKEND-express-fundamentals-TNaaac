const express = require('express');

let app = express();

// Middlewares
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.post('/json', (req, res) => {
  console.log(req.body);
});

app.post('/contact', (req, res) => {
  console.log(req.body);
})

app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});