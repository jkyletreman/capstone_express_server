const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5050;

const {
  getIngredientsfromMeals,
  getSmallCardInfo
} = require('./models/queries.js');

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '81c46821',
  apiSecret: 'EsqaA1AK2VXKR8PH'
});
const NexmoNumber = '12035808413';

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

app.post('/api/send', (req, res) => {
  // Send SMS
  nexmo.message.sendSms(
    NexmoNumber, req.body.toNumber, req.body.message, {type: 'unicode'},
    (err, responseData) => {if (responseData) {console.log(responseData)}}
  );
});

app.use('/', (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT || PORT , () => console.log(`Listening on http://localhost:${PORT}/`))
