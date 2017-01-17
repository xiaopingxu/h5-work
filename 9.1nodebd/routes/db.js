var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'bdnews'
});

connection.getConnection(function(err,connection){
    if(err){
        console.log("connection false");
    }
});

exports.connection=connection;