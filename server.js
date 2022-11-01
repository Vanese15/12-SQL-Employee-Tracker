// Packages needed for app

const inquirer = require("inquirer");
const mysql2 = require("mysql2"); 
const cTable = require("console.table");

// const db = mysql.createConnection(
//     {
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "employee_directory_db"
//     },
// );

// const questions = [
//         {
//             type: "list",
//             name: menu,
//             message: "What do you wanty to do?",
//             choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Finished"],
//             },
//     ];
// function userInput() {
//     inquirer.prompt(questions).then((userInput) => {
//         switch (userInput.menu) {
//             case "View all departments":
//                 departmentList();
//                 break;
//             case "View all roles":
//                 roleList();
//                 break;
//             case "View all employees":
//                 employeeList();
//                 break;
//             case "Add a department":
//                 addDepartment();
//                 break;
//             case "Add a role":
//                 addRole();
//                 break;
//             case "Add an employee":
//                 addEmployee();
//                 break;
//             case "Update an employee role":
//                 updateEmployeeRole();
//                 break;
            
//             default:
//         }
//       });
//   }

// function departmentList() {
//     db.promise().query("SELECT * FROM department")
//   .then(([rows,fields]) => {
//     console.table(rows);
//   })
//   .then(userInput);

// }

// function roleList() {
//     db.promise().query("SELECT * FROM role")
//   .then(([rows,fields]) => {
//     console.table(rows);
//   })
//   .then(userInput);

// }

// function employeeList() {
//     db.promise().query("SELECT * FROM employee")
//   .then(([rows,fields]) => {
//     console.table(rows);
//   })
//   .then(userInput);

// }

// // choose to add a department has prompt to enter the name of the department and department is added to the database

// function addDepartment() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "deptName",
//           message: "What is the department name?",
//         },
//     ])
//     .then((answers) => {   
//      db.promise().query(`INSERT INTO department (name) VALUES ("${answers.deptName}")`)
//   .then(([rows,fields]) => {
//     console.log("Department has been added successfully");
//   })
//   then(userInput);
// },

// // choose to add a role has prompt to enter name, salary, and department for the role and role is added to the database

// function addRole() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "roleName",
//           message: "What is the name of the role?",
//         },
//         {
//             type: "input",
//             name: "roleSalary",
//             message: "What is the salary of this role?",
//           },
//           {
//             type: "input",
//             name: "roleDept",
//             message: "What is the deptamrnt of the role?",
//           },
//     ])
//     .then((answers) => {   
//      db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES ("${answers.roleName}", "${answers.roleSalary}", "${answers.roleDept}")`)
//   .then(([rows,fields]) => {
//     console.log("Role has been added successfully");
//   })
//   then(userInput);
// },
// // choose to add an employee has prompt to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

// function addEmployee() {
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "employeeFstName",
//           message: "What is the first name of the employee?",
//         },
//         {
//             type: "input",
//             name: "employeeLstName",
//             message: "What is the last name of the employee?",
//           },
//         {
//             type: "input",
//             name: "employeeRole",
//             message: "What is the role of employee?",
//           },
//           {
//             type: "input",
//             name: "employeeMgr",
//             message: "Who is the manager of the employee?",
//           },
//     ])
//     .then((answers) => {   
//      db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}", "${answers.lastName}", "${answers.role}", "${answers.manager}")`)
//   .then(([rows,fields]) => {
//     console.log("Employee has been added successfully");
//   })
//   .then(userInput);
// })

// })

// })

// };




