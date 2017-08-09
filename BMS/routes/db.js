var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'library'
});

connection.getConnection(function(err,connection){
    if(err){
        console.log("connection false");
    }else{
    	console.log("链接成功");
    }
});

exports.connection=connection;