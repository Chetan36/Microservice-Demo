require('dotenv').config();

const http = require('http');
const PORT = process.env.PORT || 3002;

const app = require('./app');
const server = http.createServer(app);

server.listen(PORT);
console.log('Application server started and listening on port', PORT);
