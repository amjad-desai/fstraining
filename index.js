const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'There' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Install Node - https://nodejs.org/en/download/
// Install npm
