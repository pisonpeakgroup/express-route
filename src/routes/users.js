
const UsersController = require('./../controllers/UsersController');

const route = function (router) {
    // GET users listing to read records
    router.get('/')
    .get(UsersController.retrieveUsers);

    //POST users to create sign up records
    router.route('/SignUp')
    .post(UsersController.create);
        
    // GET users to read records
    router.route('/Signout')
    .get(UsersController.retrieve);

    //PUT users to update login records
    router.route('/login')
    .put(UsersController.updating);

    // PUT users to upddate records
    router.route('/ResetPassword')
    .put(UsersController.updateP);

    // PUT users to upddate records
    router.route('/ForgotUsername')
    .put(UsersController.updateS);

  

        return router;
};

module.exports = route;
