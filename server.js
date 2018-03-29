const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('HK-47 Protocols enacted');
});

app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log('Ready to serve...');
});
