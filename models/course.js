const mongoose = require('mongoose'); // client for interacting with the database


const courseSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true
    }
});


module.exports = mongoose.model('Courses', courseSchema);