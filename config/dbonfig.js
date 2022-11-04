module.exports={
    HOST:'127.0.0.1',
    PORT:3306,
    USER:'root',
    PASSWORD:'Vaibhav123@',
    DB:'ecom_db',
    dialect:'mysql',
    pool: {
        max:5,
        min:1,
        acquire:5000,
        idle:10000
    }

}