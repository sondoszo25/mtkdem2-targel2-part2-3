const express = require('express');
const server = express()

const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: true }));
const jwt = require("jsonwebtoken");

const cors = require('cors');
server.use(cors());

require('custom-env').env(process.env.NODE_ENV, "./config");


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('Failed to connect to MongoDB:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check MongoDB connection state
const checkMongoDBStatus = () => {
  const state = mongoose.connection.readyState;
  switch (state) {
    case 0:
      console.log('MongoDB Disconnected');
      break;
    case 1:
      console.log('MongoDB Connected');
      break;
    case 2:
      console.log('MongoDB Connecting');
      break;
    case 3:
      console.log('MongoDB Disconnecting');
      break;
    default:
      console.log('MongoDB Unknown');
      break;
  }
};

// Check MongoDB status on server start
checkMongoDBStatus();





server.use(express.json({limit: '50mb', extended: true }));
server.use(express.urlencoded({limit: '50mb',extended: true}));
const routeuser=require('./routes/user');
const routtoken=require('./routes/tokens');
const routchat=require('./routes/chat');
server.use(express.static('public'));
server.use('/api/Users',routeuser);
server.use('/api/Tokens',routtoken);
server.use('/api/Chats',routchat);
server.listen(process.env.PORT);

