// Get the DB Models Created
var question = require('../models/questionnaires-model');

var path = require('path');

module.exports = function(app) {

    // =====MyRoutes==============================================

    app.post('/api/question', function(req,res) {
        var ques = new question(req.body);
        ques.save(function(error) {
            if (error) {
                console.error(error);
            }
        })
        res.end();
    });

    app.get('/api/question', function(req,res) {
        // var id = req.body.HIN;
        // get the json request with e particular hin and show the questions of the particular patient
        question.find(function(err,questions) {
            if (err)
                res.send(err);
            res.send(questions);
        })
    });
};