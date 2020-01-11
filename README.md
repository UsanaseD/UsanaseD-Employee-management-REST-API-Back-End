
# Employees Management System (EMS)
EMS is a system that helps Managers to record/modify their employees.

# Installing / Getting started
Make sure you have node.js installed if not download it here [node.js](https://nodejs.org/en/) 

# Developing
Download the prpoject and make it run into you local machine by simply following each step listed bellow.
```bash
 git clone https://github.com/UsanaseD/UsanaseD-Employee-management-REST-API-Back-End.git

 cd UsanaseD-Employee-management-REST-API-Back-End

 npm install   

 npm run local  
```
# Running the tests
To run the test simply paste this commande in your terminal

```bash
npm run local
```
# Project forlder structure
How the project folders are structured

```bash
Server/#'that holds server/backend codes'
   controllers/#'that holds main classes of my APIs'
   helpers/#'that holds helper functions'
   middleware/#'that holds middleware functions'
   models/#'that holds database configurations'
   routes/#'that holds endpoints'
   server.js
 
```
# EndPoints
You should be able to test functionality of the app by using the defined endpoints listed bellow
```bash
POST /api/v1/auth/signup #'user signup'
POST /api/v1/auth/signin #'user sign in'
****************************************************
POST /api/v1/employees #'create an employee'
DELETE /api/v1/employees/:id #'delete a specific employee'
PATCH/api/v1/employees/:id #'Modify an employee'
PATCH /api/v1/employees/:id/suspend #'activate or suspend an employee'
GET /api/v1/employees/search/:id #'get a specific employee by{id}'
```
# Undone features
here are features i didn't manage to work on
```bash
-Manager cant upload external files
-Manager cant send an email after registering an employee
-System cant calculate age from DOB
-cant find employee by name , phone or position instead you can use Id and i used GET methode instead of Post
```

# done features
here are features i didn't manage to work on

```bash
-Manager can Authenticate them selves(both signUp & Login)with password encrypted and token provided
-Manager can can create and modify employees as sugested by following above End-Points
-Validation Respected as sugested.
-Status codes were respected.
```

# Documentation
For documentation head to:

```bash
https://documenter.getpostman.com/view/8761552/SWLiYQgS?version=latest
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
