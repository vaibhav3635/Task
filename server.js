const serverconfig=require('./config/serverconfig');
const express= require('express');
const { env } = require('process');
const { initializeTable } = require('./DAO/repository/tableInitializers');
const { createRoutes } = require('./router/parentRouter');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());  

app.get('/',(req,res)=>{
    res.send({message:'Welcome to express'});

})
app.listen(serverconfig.PORT,serverconfig.HOST,()=>{
    console.log(`server is listening in ${serverconfig.HOST},${serverconfig.PORT}`);
});

//IIFE -immediately Invoked function because we want to run our api  to run only once
(()=>{
    createRoutes(app);
    initializeTable(false);
})();