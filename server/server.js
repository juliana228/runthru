const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routes/api');
const cors = require('cors');
const bodyParser = require('body-parser');

// parses JSON from incoming request
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', apiRouter, (req, res) => {
  return res.status(200).send(res.locals.prevRuns);
});

// catch-all error handler
app.get('*', (req, res) => {
  return res.status(404).sendFile(path.join(__dirname, './client/404.html'));
});

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;
