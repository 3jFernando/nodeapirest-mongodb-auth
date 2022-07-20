const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000

let app = express();


// config app
app.set('port', port);
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rutas -> contiene todos los endpoint (get, post, put, delete)
const partidos = require('./src/routes/partidos');
const users = require('./src/routes/users');

// endpoints
app.use("/partidos", partidos);
app.use("/users", users);

let server = http.createServer(app);
server.listen(port);