const User = require('./../models/HappModel');

const HappController = {
   
    //Using Promise here in place of CallBack to Retrieve all Users with a GET HTTP Request
    retrieveUsers: function (req, res) {
        User.find({})
        .then((users) => {
          res.statusCode = 200;
          res.json(users);
        }, (err) => next(err))
        .catch((err) => next(err));
      },

     // Using CallBack function Controller codes here to Control the data creation. 
    Create: function (req, res) {
        const body = req.body;

        if (!body.clinicalNote) {
            res.status(400).send({
                message: 'A clinical Note is required.'
            });
        } else if (!body.procedure) {
            res.status(400).send({
                message: 'A procedure is required.'
            })
        } 
        if(!req.body.labTest){
            res.status(400).send({
                message: 'A lab Test is required.'
            });
          }
          if(!req.body.diagnosis){
            res.status(400).send({
                message: 'A diagnosis is required.'
            });
          }
        else {
            const user = new User(body);
            user.save((err) => {
                if (err) {
                    res.status(500).send({
                        message: 'An error occurred kindly try again.',
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
                    message: 'An error occurred in the process you where trying to Retrieve Records.',
                    error: err
                });
            } else {
                res.status(200).send({
                    success: 'true',
                    message: 'You have Successfully Retrieved Records',
                });
            }
        });
    },

    // callback functions for updating
    updating: function (req, res) {
        User.login({}, function (err, users) {
            if (err) {
                res.status(500).send({
                    message: 'An error occurred while you where trying to update records.',
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
};



module.exports = HappController;