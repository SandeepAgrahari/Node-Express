module.exports = (app)=>{

    const User = require('../controller/userController');


    app.route('/users')
        .get(User.get_all_users)
        .post(User.create_user);
    // app.route('/users/:user_id')
    //     .get(User.read_an_user)
    //     .put(User.update_user)
    //     .delete(User,delete_an_user);
}