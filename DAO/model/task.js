const { Sequelize } = require("sequelize");
const conn=require("../repository/dbconnection")

//Creating the table in Database
//task is the table  in db
const defineTask=(conn,DataTypes)=>{
    const Task = conn.define("task",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
           type:Sequelize.STRING,
           allowNull:false,
           unique:true//will Not allow Duplicate
        },
        description:{
            type:Sequelize.STRING,
        },
        stage:{
            type:Sequelize.STRING
        }
    });
    return Task;
}
module.exports=defineTask;