require("dotenv").config();  //syntax for using dotenv
//console.log(`${process.env.PORT}`);
module.exports={
 HOST:process.env.HOST,  //Process is global object in nodejs and anything in .env can be accessed using proces.env 
 PORT:process.env.PORT,
 //ENV:process.env.ENV
}