require('dotenv').config();
const express = require('express'); // import the Express module

const Joi = require('joi'); // handle input validation

const app = express(); // create an express application

const mongoose = require('mongoose'); // client for interacting with the MongodB database

// Connect to the database
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}); 

db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Database'));

const json = express.json()  // middleware for parsing json data



const port = process.env.PORT || 3000;  // read the value of the environment variable for port if it is set a default value of 3000.

module.exports = port;

const coursesRouter = require('./routes/courses'); // route for courses


//Middleware
app.use(json);

app.use('/courses',coursesRouter);


// Listen for connections to the server

app.listen(port, () =>{

    console.log(`Listening on port ${port}...`);
})








