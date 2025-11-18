// npm install express
// npm install prom-client

const client = require('prom-client');
const express = require('express');
const app = express();

client.collectDefaultMetrics();

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.send(await client.register.metrics());
});

app.listen(3111);