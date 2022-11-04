//Functions for Create a task in db
//Functions for Update a task in db
//Functions for Delete a task in db
//Functions for Search a task in db
//Function to Select a task
const dbconnection=require("./dbconnection");
const defineTask=require("../model/task");
//Passing both parametrs to the defineTask function expression
const Task=defineTask(dbconnection.connection,dbconnection.DataTypes);
//Function to create the table in Db
const createTaskTable =async(forceCreation)=>{
    return await  Task.sync({force:forceCreation})
}

//Functions for Create a row in db
const save =async (task)=>{
  return   await Task.create({
        name:task.name,
        description:task.description,
        stage:task.stage
    })
}
//Function to search by id
const fetchTaskById= async(id)=>{
    return await Task.findByPk(id);
}
//Function to get all tasks
const fetchAllTask = async ()=> {
    return await Task.findAll();
}

//Funtion to Delete a task
const deleteTask =async(id)=>{
     return await Task.destroy({
        where:{id:id}});
}

module.exports={
    createTaskTable:createTaskTable,
    createTask:save,
    fetchTaskById:fetchTaskById,
    fetchAllTask:fetchAllTask,
    deleteTask:deleteTask
}