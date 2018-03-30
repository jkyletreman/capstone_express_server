const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5050;

const {
  testQuery
} = require('./models/queries.js');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/ingredients', (req, res) => {
  testQuery(req).then(ingredients => {
    res.format({
      "application/json":() => res.json(ingredients)
    });
  });
});

app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log('Ready to serve...');
});
