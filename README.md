## Overview
Express-Courses is a REST API service that enables client applications to interact with a database of courses that are available at an institution. Clients can perform  create/read/update/delete (CRUD) operations on the courses database by using the standard HTTP methods such as:

- Retrieving a list of all available courses.
- Retrieving a course with a specific ID.
- Adding a new course to the database.
- Updating the details of an existing course.
- Deleting a course from the database.

## Dependencies
- [Node.js](https://nodejs.org/en): The Node.js distribution comes prepackaged with a Node Package Manager (NPM) client which is used to install required modules and    application dependencies.

- [Express](https://www.npmjs.com/package/express): Express is a lightweight Node.js web application framework for building web and mobile applications.

- [Joi](https://www.npmjs.com/package/joi): Joi is a schema description language and a validator for JSON data and other types of JavaScript input.

- [Dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a module that loads environment variables from a .env file into process.env

- [Mongoose](https://www.npmjs.com/package/mongoose): Mongoose is an object modeling tool for MongoDB databases.

- [Nodemon](https://www.npmjs.com/package/nodemon): Mongoose is a tool that automatically restarts a Node.js application when file changes are detected.

## Installation

-  Download the source code by running `git clone https://github.com/Emmanuel289/Express-Courses.git` within a terminal in your preferred directory.
-  If you do not have Node installed on your machine, download the installer for the version of your operating system from https://nodejs.org/en/ and follow the instructions for installing Node and the NPM client. If you already have node installed on your machine, skip to the next step.
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
- If you don't have MongoDB installed on your machine, download the installer for the version of your operating system by following the instructions at https://www.mongodb.com/.
- After installing MongoDB, ensure that the mongod service is running by following the instructions to start the service here https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/  

- Confirm that the application is ready to start interacting with the database by executing `npm start` within the application's directory. You should get an output similar to the screenshot below:


