//These API can be used using postman and passing json objects and connect with the local sql  database
//API-
//http://localhost:8080/task/create
//http://localhost:8080/task/search
//http://localhost:8080/task/id
//http://localhost:8080/task/id


const taskRouter=require("./taskRouter");
exports.createRoutes= (app)=>{
    app.use("/task",taskRouter)
}