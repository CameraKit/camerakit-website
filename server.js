const http = require('http');
const express = require('express');
const enforce = require('express-sslify');
const next = require('next');
const bodyParser = require('body-parser');
const request = require('request');
const { body, check, validationResult } = require('express-validator/check');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const handleResponse = (req, res) => {
  handle(req, res);
};

const handleError = err => {
  if (err) throw err;
  console.log(`Ready on localhost:${port}`);
};

app.prepare().then(() => {
  const expressApp = express();
  expressApp.use(bodyParser.urlencoded({ extended: false }));
  expressApp.use(bodyParser.json());

  if (!dev) {
    expressApp.use(enforce.HTTPS({ trustProtoHeader: true }));
    console.log('Using enforced https;');
  }

  expressApp.post('/processForm', [
    body('name')
      .isLength({ min: 1, max: 100 })
      .trim()
      .escape(),
    body('email')
      .isLength({ min: 1, max: 100 })
      .isEmail()
      .normalizeEmail(),
    check('company')
      .isLength({ min: 1, max: 100 })
      .trim()
      .escape(),
    check('message')
      .isLength({ min: 1, max: 10000 })
      .not().isEmpty()
      .trim()
      .escape(),
  ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const {
      name, email, company, message,
    } = req.body;

    const form = {
      name, email, company, message,
    };

    request.post({
      url: `${process.env.API_URL}/contact`,
      form,
    }, (error, response, data) => {
      if (error != null) {
        return res.status(500).send(error);
      }
      return res.status(response.statusCode).send(data);
    });
    return res.status(500).send('Request was never made');
  });

  expressApp.use(handleResponse);

  http.createServer(expressApp).listen(port, handleError);
});
