const taskRepository=require("../DAO/repository/task.repository");
const { param } = require("../router/taskRouter");
const createTask=(req,res)=>{
    const body=req.body;
    if(!body.name){

      res.status(400).send({
        message:"Task Name cannot be empty!"
      });
        return;
    }
  taskRepository.createTask({
    name:body.name,
    description:body.description,
    stage:body.stage
  }).then(result=>{
    console.log(`Task :${result.name} is created successfully`);
    res.status(201).send(result);
   })
   .catch(error => {
    if(error.name === 'SequelizeUniqueConstraintError') {
        
        res.status(400).send({
            message: `${body.name} already exists!`
        });
        return;
    }
    throw error;
})
}

const fetchAllTask =(req,res)=>{
  taskRepository.fetchAllTask()
  .then(tasks=>{
    res.status(200).send(tasks);
  }).catch(error=>{
    console.log(error.message);
    res.status(500).send("Error in loading tasks Please try again after some time");
  })
}

const fetchTaskById=(req,res)=>{
  const taskid=req.params.taskId;
  taskRepository.fetchTaskById(taskid)
  .then(result=>{
    if(!result){
      res.status(404).send({
        message:"Task Doesn't Exist "});
      return;
    }
    res.status(200).send(result);
  })
  .catch(error => {
    
        res.status(404).send({
            "message": "The requested task Id doesn't exist in the system!"
        });
    
})
}

const deleteTask=(req,res)=>{
  const taskid=req.params.taskId;
  taskRepository.deleteTask(taskid)
  .then(result=>{
   
    res.status(200).send(`${taskid} deleted successfully` );
  }).catch(error=>{
    res.status(404).send({
      "message": "The requested task Id doesn't exist in the system!"
  });
  
})
}
module.exports={
    create:createTask,
    fetchAllTask:fetchAllTask,
    fetchTaskById:fetchTaskById,
    deleteTask:deleteTask
}