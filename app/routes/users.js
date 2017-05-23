// Get the DB Models Created
var User = require('../models/user');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/Users', function(req, res) {
    // use mongoose to get all Userss in the database
        User.find(function(err, Users) {

        // if there is an error retrieving, send the error. 
        // nothing after res.send(err) will execute
        if (err)
            res.send(err);
        res.json(Users); // return all Userss in JSON qomats
      });
    });
};