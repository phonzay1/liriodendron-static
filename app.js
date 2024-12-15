const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/tulipifera', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/tulipifera.html'));
});

app.get('/resources', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/resources.html'));
});

app.listen(port, () => console.log(`Your app is running on port ${port}! :)`));
