const express = require('express');
const Joi = require('joi');

const router = express.Router();

module.exports = router;

// local copy of courses. To be moved to database
const courses = [
    {id: 1, name: 'data structures and algorithms'},
    {id: 2, name: 'operating systems'}, 
    {id: 3, name:  'systems design'}
];


// Get the list of all the courses

router.get('/', (req, res) =>{

    return res.send(courses);
})

// Get a course with a given id

router.get('/:id', (req, res) =>{

    let { id } = req.params;

    const course = courses.find(c => c.id === parseInt(id));

    if (!course){

        return res.send('Course is not available at this time');


    };

    

    return res.send(course);


});


// Add a new course to the list of courses

router.post('/', (req, res) =>{

    const schema = new Joi.object({

        id : Joi.number(),

        name: Joi.string().min(3).required(),
    });

    const new_course = {id: courses.length + 1,  name: 'database management systems'};
    const {error} = schema.validate(new_course);


    if (error) return res.send('Course name is required');

    courses.push(new_course);  

    return res.send(new_course);

});

//Update an existing course with a given id

router.patch('/:id', (req, res) => {

    let { id } = req.params;

    if (!id) return res.send('Course with the given ID is not available');


    const course = courses.find(c => c.id === parseInt(id));

    course.name = 'A new course';

    return res.send(course);


})


//Delete a course with a given id

router.delete('/:id', (req, res) =>{

    let { id } = req.params;

    if (!id) return res.send('Course with the given ID does not exist');

    const course = courses.find(c => c.id === parseInt(id));

    const index = courses.indexOf(course);

    if(!index) return res.send('Course with the given ID does not exist');

    

    courses.splice(index,1);

    res.send(course);


});

module.exports = router;


