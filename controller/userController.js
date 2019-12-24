const User = require('../model/userModel');

exports.get_all_users = (req, res)=>{
    User.getAllUsers((err, user)=>{
            if(err){
                res.send(err);
            }else{
                console.log('users', user);
                res.send(user);
            }

    });
};

exports.create_user = (req, res)=>{
    console.log(User);
    const userData = new User(req.body);
    if(!userData.user_name){
        res.status(400).send({error:true, message:"Please enter user_name in request."})
    }
    if(!userData.full_name){
        res.status(400).send({error:true, message:"Please enter full_name in request."})
    }
    if(!userData.email){
        res.status(400).send({error:true, message:"Please enter email in request."})
    }
    if(!userData.password){
        res.status(400).send({error:true, message:"Please enter password in request."})
    }
    User.createUser(userData, (err, user)=>{
            if(err){
                res.send(err);
            }else{
                console.log('users', user);
                res.send(user);
            }

    });
};