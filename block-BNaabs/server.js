const express = require('express');

let app = express();

// Middlewares
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded( {extended: false }));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendFile(__dirname + '/new.html');
});

app.get('/users/:username', (req, res) => {
  let username = req.params.username;
  console.log(username);
  res.send('username: ' + username);
});

app.post('/new', (req, res) => {
  res.json(req.body);
});


app.listen(3000, () => {
  console.log('=> Server listening on port 3000');
});