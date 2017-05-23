// Get the DB Models Created
var User = require('./models/user');
var question = require('./models/questionnaires-model');

var path = require('path');

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

    // =====MyRoutes==============================================

    app.post('/api/question', function(req,res) {
        console.log("Question and answer received");
        var ques = new question(req.body);
        ques.save(function(error) {
            console.log("Q&A is saved in the DB");
            if (error) {
                console.error(error);
            }
        })
        res.end();
    });

    app.get('/api/viewQuestionnaires', function(req,res) {
        // var id = req.body.HIN;
        // get the json request with e particular hin and show the questions of the particular patient
        question.find(function(err,questions) {
            if (err)
                res.send(err);
            res.send(questions);
        })
    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('index.html',{root : path.join(__dirname + "" , '../public')}) // load our public/index.html file
    });
};