const User = require('./../models/usersModel');

const usersController = {
   
    //Using Promise here in place of CallBack to Retrieve all Users with a GET HTTP Request
    retrieveUsers: function (req, res) {
        User.find({})
        .then((users) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
      },

     // Using CallBack function Controller codes here to Control the Sign Up creation. 
    Create: function (req, res) {
        const body = req.body;

        if (!body.email) {
            res.status(400).send({
                message: 'An email address is required.'
            });
        } else if (!body.password) {
            res.status(400).send({
                message: 'A password is required.'
            })
        } 
        if(!req.body.firstname){
            res.status(400).send({
                message: 'A First Name is required.'
            });
          }
          if(!req.body.lastname){
            res.status(400).send({
                message: 'A Last Name is required.'
            });
          }
        else {
            const user = new User(body);
            user.save((err) => {
                if (err) {
                    res.status(500).send({
                        message: 'An error occurred.',
                        error: err
                    });
                } else {
                    res.status(200).send({
                        user: user
                    });
                }
            });
        }
    },

   
    // Using CallBack Function here to retrieve users
    retrieve: function (req, res) {
        User.findById({}, function (err, users) {
            if (err) {
                res.status(500).send({
                    message: 'An error occurred you where trying to Sign Out.',
                    error: err
                });
            } else {
                res.status(200).send({
                    success: 'true',
                    message: 'You are Successfully Signed Out',
                });
            }
        });
    },

    // callback functions for logging in
    updating: function (req, res) {
        User.login({}, function (err, users) {
            if (err) {
                res.status(500).send({
                    message: 'An error occurred while you where trying to Sign in.',
                    error: err
                });
            } else {
                res.status(200).send({
                    success: 'true',
                    message: 'You are welcome ' + User ,
                });
            }
        });
    },

       // callback functions for password resset
    updateP: function (req, res) {
        User.findOneAndUpdate({}, function (err, users) {
            if (err) {
                res.status(500).send({
                    message: 'An error occurred while you where trying to reset your password.',
                    error: err
                });
            } else {
                res.status(200).send({
                    success: 'true',
                    message: 'You are password has been updated check your email' ,
                });
            }
        });
    },

       // callback functions for username resseting
    updateS: function (req, res) {
        User.findOneAndUpdate({}, function (err, users) {
            if (err) {
                res.status(500).send({
                    message: 'An error occurred while you where trying to Reset Username.',
                    error: err
                });
            } else {
                res.status(200).send({
                    success: 'true',
                    message: 'You are username has been updated check your email' ,
                });
            }
        });
    }

};



module.exports = usersController;