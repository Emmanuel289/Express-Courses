const express = require('express'); // import the Express module

const Joi = require('joi'); // handle input validation

const app = express(); // create an express application

const json = express.json()  // middleware for parsing json data



const port = process.env.port || 3000;  // read the value of the environment variable for port if it is set a default value of 3000.

const courses = [
    {id: 1, name: 'data structures and algorithms'},
    {id: 2, name: 'operating systems'}, 
    {id: 3, name:  'systems design'}
];


app.use(json);

// Respond to a GET request at the root endpoint with a hello message

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

    let {name} = req.body;

    // Input validation

    if (!name){

        return res.status(400).send('Name is required');
    }

    const course = {

        id: courses.length + 1,

        name: name 
    };

    courses.push(course) // Add the  new course to the list of courses

    return res.status(201).send(course);
});

// Listen for connections to the server

app.listen(port, () =>{

    console.log(`Listening on port ${port}...`);
})

