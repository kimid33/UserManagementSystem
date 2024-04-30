const mysql = require('mysql2')


var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'usermanagementsystem',
    //JWT_SECRET: process.env.JWT_SECRET
})
var connection = mysqlConnection.connect((err)=>{
    if(err){
        console.log('error in db connection  '+JSON.stringify(err,undefined,2));
    }
    else {
        console.log('DB connected')
    }
})

module.exports=connection;