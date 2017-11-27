const express = require('express');
const app = express();
const path = require('path');

const urlLogger = (request, response, next) => {
  console.log('Request URL: ', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime: ', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));



app.get('/json', (request, response) => {
  // response.status(200).json({ "name": "Robbie" });
  response.sendFile(__dirname + '/randomJSON.json');
});

app.get('/sunsets', (request, response) => {
  response.sendFile(__dirname + '/public/sunsets.html');
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000.');
});