const taskRepository=require("./task.repository")
//forceInitializer will drop existing table and create a new table each time 
//so if want to store data make it false
exports.initializeTable=(forceCreation)=>{
    taskRepository.createTaskTable(forceCreation);
}