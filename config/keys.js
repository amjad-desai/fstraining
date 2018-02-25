// keys.js

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
  //we are in production
} else {
  //we are in development
  module.exports = require('./dev');

  //require('./dev');
}
