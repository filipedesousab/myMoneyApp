const port = 3003;

const bodyPaser = require('body-parser');
const express = require('express');

const server = express();

server.use(bodyPaser.urlencoded({ extended: true }));
server.use(bodyPaser.json());

server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
