const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'node'
});
connection.connect((err, result)=>{
    if(err) throw err;
    console.log('Connected');
})
module.exports = connection;