const express = require('express');

const hostname = "0.0.0.0";
const port = 3000;
const cors = require('cors');
const server = express();

server.use(cors());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017"); // Whithout Docker
//mongoose.connect("mongodb://mongo/apinode");

server.use(express.urlencoded());
server.use(express.json());


const postRoute = require("./api/routes/postRoute");
postRoute(server);

const commentRoute = require("./api/routes/commentRoute");
commentRoute(server);

const userRoute = require("./api/routes/userRoute");
userRoute(server);

server.listen(port, hostname);