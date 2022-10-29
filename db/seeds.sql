INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES ("Engineering Manager", 120000, 1),
       ("Engineering Associate", 70000, 1),
       ("Sales Manager", 110000, 2),
       ("Sales Associate", 80000, 2),
       ("Finance Manager", 130000, 3);
       ("Finance Associate", 90000, 3);
       ("Legal Manager", 150000, 4);
       ("Finance Associate", 105000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ari", "Smith", 6, NULL),
       ("Bri", "Ryan", 7, 41),
       ("Lex", "Daniels", 8, NULL),
       ("Obi", "Lopez", 9, 71),
       ("Aly", "Jones", 10, NULL),
       ("Reg", "Elliot", 11, 91),
       ("Jan", "Scott", 12, NULL),
       ("Bev", "Nelson", 13, 112);
