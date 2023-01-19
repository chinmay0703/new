const mysql=require("mysql");
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root@123",
    port:"3306",
    database:"data2"
});
 con.connect(err=>{
    if(err){
        throw err;
    }else{
        console.log("---------------connected--------------------------");
    }
 })

module.exports=con;

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';
