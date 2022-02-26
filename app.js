require('dotenv').config();
const Server = require('./models/server');


const server = new Server();


//ejectuta el servidor
server.listen();
