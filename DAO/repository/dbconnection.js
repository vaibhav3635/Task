
const config =require("../../config/dbonfig");
const {Sequelize,DataTypes}= require("sequelize");

const connection= new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host:config.HOST,
        dialect:config.dialect,
        pool:{
            max:config.max,
            min:config.min,
            acquire:config.acquire,
            idle:config.idle

        }
    }
);

module.exports={
    connection:connection,
    DataTypes:this.DataTypes
}
