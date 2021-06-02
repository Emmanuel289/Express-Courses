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


const coursesRouter = require('./routes/courses'); // route for courses
const courses = [
    {id: 1, name: 'data structures and algorithms'},
    {id: 2, name: 'operating systems'}, 
    {id: 3, name:  'systems design'}
];

//Middleware
app.use(json);

app.use('/courses',coursesRouter);


// Listen for connections to the server

app.listen(port, () =>{

    console.log(`Listening on port ${port}...`);
})

/** Respond to a GET request at the root endpoint with a hello message

app.get('/', (req, res) =>{

    return res.send('Hello World!');
})


// Respond with a list of courses for a GET request at the '/api/customers' endpoint.

app.get('/api/courses', (req, res) =>{

    return res.send(courses);

})

// Return a specific course using its id as the query parameter

app.get('/api/courses/:id', (req, res) =>{

    let { id } = req.params;

    const course = courses.find((course) => course.id === parseInt(id));

    

    if (!course){

        return res.status(404).send('The course with the given ID was not found.');
    }

    return res.status(200).send(course);
});

// Post a new course 

app.post('/api/courses', (req, res) =>{

    
    // Validate client input with the schema
    const { error } = validator(req.body);

    if(error){

        return res.status(400).send(error.details[0].message);
    };


    const course = {

        id: courses.length + 1,

        name: req.body.name 
    };

    courses.push(course) // Add the  new course to the list of courses

    return res.status(201).send(course);
});

//Update an existing course

app.put('/api/courses/:id', (req, res)=>{
    //Lookup a course. if it does not exist, return a 404 error

    let { id } = req.params; 

    let body = req.body;
    const course = courses.find(c => c.id === parseInt(id));

    if (!course){

        return res.status(404).send(`The course with the given ID was not found`);
    }

    //Validate request body

    const { error } = validator(body);

    if(error){

        return res.status(400).send(error.details[0].message);
    }

    //Update the course 

    course.name = body.name;

    return res.status(201).send(course);

});

//Delete a course

app.delete('/api/courses/:id', (req, res) =>{

    let { id } = req.params;

    let course = courses.find(c => c.id === parseInt(id));

    if (!course){

        return res.status(404).send('The course with the given ID was not found');
    }

    const index = courses.indexOf(course);  // get the index of the course in courses list

    courses.splice(index, 1); // remove the course
    return res.send(course);
});

// Handle validation of input

function validator(course) {

    const schema = Joi.object({

        name : Joi.string().min(3).required()
    });
    
    return schema.validate(course);
}
**/






