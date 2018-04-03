const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5050;

const {
  getIngredientsfromMeals,
  getSmallCardInfo
} = require('./models/queries.js');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/api/smallCards', (req, res) => {
  getSmallCardInfo(req).then(cards => {
    res.format({
      "application/json":() => res.json(cards)
    })
  })
})

app.get('/api/ingredients', (req, res) => {
  getIngredientsfromMeals(req).then(ingredients => {
    res.send(ingredients)
  })
});

app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log('Ready to serve...');
});
