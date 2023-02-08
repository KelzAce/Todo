ToDO
Add collection description…
GET
Get All Task
"/api/v1/task/"
This route gets all task present in the Database

POST
Create Task
"/api/v1/task/"
This route posts a new task present to the Database
Body
raw (json)
json
{
    "name": " ",
    "completed": true
}

GET
Get Single Task
/api/v1/task/:id
This route gets a single task wih corresponding id present in the Database

PATCH
Update Task
/api/v1/task/:id
This route updates a task with corresponding id present in the database 
Body
raw (json)
json
{
    "name": " ",
    "completed": true
}
DELETE
Delete Task
/api/v1/task/:id
This route deletes a task with corresponding id present in the database 
