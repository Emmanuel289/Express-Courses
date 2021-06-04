## Overview
Express-Courses is a REST API service that enables client applications to interact with a database of courses that are available at an institution. With Express-Courses, a user can perform create/read/update/delete (CRUD) operations on a MongoDB database by using the standard HTTP methods such as:

- Retrieving a list of all courses.
- Retrieving a course with a specific ID.
- Adding a new course to the database.
- Updating the details of an existing course.
- Deleting a course from the database.

## Dependencies

- [Node.js](https://nodejs.org/en): The Node.js distribution comes prepackaged with a Node Package Manager (NPM) client which is used to install required modules and    dependencies for the application.

- [Express](https://www.npmjs.com/package/express): Express is a lightweight Node.js web application framework for building web and mobile applications.

- [Joi](https://www.npmjs.com/package/joi): Joi is a schema description language and validator for Javascript data.

- [Dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a module that loads environment variables from a .env file into process.env

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose is an object modeling tool for MongoDB databases.

- [Nodemon](https://www.npmjs.com/package/nodemon): Nodemon is a tool that automatically restarts a Node.js application when file changes are detected.

## Installation

-  Download the source code for Express-Courses by running `git clone https://github.com/Emmanuel289/Express-Courses.git` within a terminal in a preferred directory on your local machine.

-  If you do not have Node installed on your machine, download the installer file for the version of your operating system from https://nodejs.org/en/ and follow the instructions for installing Node and the NPM client. If you already have Node installed on your machine, skip to the next step.
- 
-   To check the version of Node and NPM installed on your machine, run the following commands in a terminal:
    ```
    node -v
    
    npm -v
    
    ```
- Replace the 'package.json' file that contains the details of the application and its dependencies by running `npm init` and following the command prompts. This command will also create a 'node_modules' folder which contains a list of modules that are required to run the application.

- Install the application's dependencies (Express, Joi, Dotenv, etc.) by executing the following command in a terminal: 
```
npm install express joi dotenv mongoose nodemon

```
- If you don't have MongoDB installed on your machine, download the installer file for the version of your operating system by following the instructions at https://www.mongodb.com/.

- After installing MongoDB, ensure that the 'mongod' service is running by following the instructions to start the service at https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/  

- Confirm that the application is ready to start interacting with the database by executing `npm start` within the application's directory. You should get an output similar to the screenshot below:

![image](https://user-images.githubusercontent.com/6232188/120741742-8013b300-c4ed-11eb-8503-bf5837c01ddb.png)

### Performing CRUD operations on the database
 The 'course.js' file that is located inside the `models/` folder of the source code contains the schema for defining and composing a course into a document for storage in the database. The 'routes.rest' file contains a list of standard HTTP methods (GET/POST/PUT/DELETE) that are used to send requests to the local server which then forwards the requests to the database. For example, to retrieve the details of a course with ID of 60b7aa65cdc61c14386cf759f, the following request should be sent to the server
`GET http://localhost:5000/courses/60b7aa65cdc61c14386cf759` and to delete the course, the following request should be sent to the server 
`DELETE http://localhost:5000/courses/60b7aa65cdc61c14386cf759`

### References

 - [Node.js](https://nodejs.org/en): Documentation for Node.js.

- [Express](https://www.npmjs.com/package/express): Documentation, features, and examples of using Express in a web application.

- [Joi](https://www.npmjs.com/package/joi): Documentation, features, and examples of using Joi in a web application.

- [Dotenv](https://www.npmjs.com/package/dotenv): Documentation, installation, configuration, and usage of the Dotenv module. 

- [Mongoose](https://www.npmjs.com/package/mongoose): Documentation, installation, examples of using Mongoose with MongoDB.

- [Nodemon](https://www.npmjs.com/package/nodemon): Installation, usage, configuration of the Nodemon service.


