const db = require('./data/db.js');

// importing node modules and router/setting port
const express = require('express');
const { router } = require('./router');
const port = process.env.PORT || 3001;

// setting up server
const server = express();
server.use(express.json());

// running the router
router(server, db);

// intitializing the server
server.listen(port, () => console.log(`The server is listening on port ${port}`));