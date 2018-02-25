const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
  cookieSession({
    //max age has to be defiend in milliseconds so 30 days * 24 hours * 60 min......, you get the idea
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Install Node - https://nodejs.org/en/download/
// Install npm
