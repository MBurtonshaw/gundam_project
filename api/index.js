// load modules
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes/routes');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();

app.use(express.json());

// setup morgan which gives us http request logging
app.use(morgan('dev'));

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.redirect('/api');
});

app.use('/api', routes);

// Listen for request
app.listen(3000);