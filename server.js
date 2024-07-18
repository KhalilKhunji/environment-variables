const express = require('express');
const morgan = require('morgan');

app.use(morgan('dev'));

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});