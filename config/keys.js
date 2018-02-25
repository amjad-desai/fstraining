// keys.js

if (process.env.NODE_ENV === 'production') {
  //we are in production
} else {
  //we are in development
  module.exports = require('./dev');

  //require('./dev');
}
