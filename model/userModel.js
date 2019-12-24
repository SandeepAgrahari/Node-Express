const connection = require('../config/dbConfig');

var User = (userData)=>{
    this.user_name = userData.user_name;
    this.full_name = userData.full_name;
    this.email = userData.email;
    this.password = userData.password;
    this.created_at = new Date();
    this.status = 1;
}

User.getAllUsers = (result)=>{
    connection.query("Select * from user", (err, res)=>{
        if(err){
            console.log('Error: ', err);
            result(err, null)
        }else{
            console.log('users', res);
            result(null, res);
        }
    });
};

User.createUser = (userData, result)=>{
    connection.query("Insert into user set ?", userData,(err, res)=>{
        if(err){
            console.log('Error: ', err);
            result(err, null)
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

module.exports = User;