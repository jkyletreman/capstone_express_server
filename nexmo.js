const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '81c46821',
  apiSecret: 'EsqaA1AK2VXKR8PH'
});

nexmo.message.sendSms(
  '12035808413', '19106126591', 'yo',
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    }
 );
