const request = require('request');
require('dotenv/config');

exports.verification = (req, res) => {
  if(req.body === undefined || req.body === '' || req.body === null) {
    return res.json({"responseError" : "captcha error"});
  }
  const secretKey = process.env.CAPTCHA
  const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}`;

  request(verificationURL, (error, response, body) => {
    body = JSON.parse(body);
    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "Failed captcha verification"});
    }
    res.json({"responseSuccess" : "Sucess"});
  });
};