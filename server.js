/* DB methods:
* find: no params; returns all entries
* findById: single ID as param; returns only that entry
* insert post object as param; returns post's ID
* update: ID and object with changes as params; returns the # of records updated (1 === successful)
* remove: ID as param; returns # of records deleted
*/
const db = require('./data/db.js');

// importing node modules/setting port
const express = require('express');
const port = process.env.PORT || 3001;

// setting up server
const server = express();
server.use(express.json());

server.listen(port, () => console.log(`The server is listening on port ${port}`));