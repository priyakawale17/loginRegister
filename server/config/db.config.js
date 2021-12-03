
const mysql = require('mysql');

//databse connection
const dbConn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'login'

});
dbConn.connect(function(err){
    if(err) throw err;
    console.log('database is connected ')
})

//export module

module.exports = dbConn ;