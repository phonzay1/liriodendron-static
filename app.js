const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => console.log(`Your awesome app is running on port ${port}!`));