const express = require('express');
const Joi = require('joi');

const router = express.Router();

const Course = require('../models/course');

module.exports = router;


// Get the list of all the courses

router.get('/', async (req, res) =>{

    try{

        const courses = await Course.find();

        return res.status(200).send(courses);


    } catch(err){

        return res.status(500).send({message: err.message});

    }


});

// Get a course with a given id

router.get('/:id', getCourse, (req, res) =>{
    
    return res.send(`The course is ${res.course}`);


});


// Add a new course to the list of courses

router.post('/', async (req, res) =>{

    const course = new Course({

        name: req.body.name
    });

    try{
        
        const new_course = await course.save();
        return res.status(201).send(new_course)
    } catch(err){

        res.status(400).send({ message: err.message});
    }


});

//Update an existing course with a given id

router.put('/:id', getCourse, async (req, res) => {

    if(req.body.name != null){

        req.course.name = req.body.name;

        
    }

    try{

        let updated_course = await res.course.save();

        return res.status(201).send(updated_course)

    }catch(err){

        return res.status(400).send({message: err.message});


    }




});


//Delete a course with a given id

router.delete('/:id', getCourse, async (req, res) =>{

    try{

        await res.course.remove();

        res.status(201).send({message: 'Deleted the course'});

    }
    catch(err){

        res.status(404).send({message: err.message});


    }



});


// Validating request parameters

async function getCourse(req, res, next){

    let course;

    try{

        course = await Course.findById(req.params.id);

        if (!course){

            return res.status(404).send({message: 'Course is not available'})
        }


    } catch(err){

        return res.status(500).send({message: err.message})


    }

    res.course = course;

    next();
}

module.exports = router;


