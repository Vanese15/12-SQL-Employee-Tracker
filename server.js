//starting cmd line application has selectable options:
// view all departments
// view all roles
// view all employees
// add a department 
// add a role 
// add an employee 
// update an employee role


// You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries 
// [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line 
// [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

// Make your queries asynchronous. MySQL2 exposes a `.promise()` function on Connections to upgrade 
// an existing non-Promise connection to use Promises. Rrefer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

// Packages needed for app

const inquirer = require("inquirer");
const express = require("express"); 
const mysql2 = require("mysql2"); 
const app = express();



