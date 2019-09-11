const HappController = require('./../controllers/HappController');

const route = function (router) {
    // GET users listing to read records
    router.get('/')
    .get(HappController.retrieveUsers);

    //POST users to create sign up records
    router.route('/Hhistory')
    .post(HappController.create);
        
    // GET users to read records
    router.route('/Hrecords')
    .get(HappController.retrieve);

    //PUT users to update login records
    router.route('/HdataSimilarities')
    .put(HappController.updating);


        return router;
};

module.exports = route;
