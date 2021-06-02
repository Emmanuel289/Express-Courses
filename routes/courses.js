const express = require('express');

const router = express.Router();

module.exports = router;


// Return a specific course using its id as the query parameter

router.get('/:id', (req, res) =>{

    let { id } = req.params;

    const course = courses.find((course) => course.id === parseInt(id));

    

    if (!course){

        return res.status(404).send('The course with the given ID was not found.');
    }

    return res.status(200).send(course);
});

// Post a new course 

router.post('/', (req, res) =>{

    
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

router.put('/:id', (req, res)=>{
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

router.delete('/:id', (req, res) =>{

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
