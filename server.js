const http = require('http');
const express = require('express');
const enforce = require('express-sslify');
const next = require('next');
const bodyParser = require('body-parser');
const request = require('request');

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

  expressApp.post('/processForm', (req, res) => {
    const {
      name, email, company, message,
    } = req.body;

    const form = {
      name, email, company, message,
    };

    request.post({
      url: `${process.env.API_URL}/contact`,
      form,
    }, (error, response, body) => {
      if (error != null) {
        res.status(500).send(error);
      }
      res.status(response.statusCode).send(body);
    });
  });

  expressApp.use(handleResponse);

  http.createServer(expressApp).listen(port, handleError);
});
