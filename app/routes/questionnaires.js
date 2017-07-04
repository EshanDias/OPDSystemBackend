// Get the DB Models Created
var question = require('../models/questionnaires-model');
var patient_detail = require('../models/patient_model');

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

    app.get('/api/question:id', function(req,res) {
        question.find({HIN: req.params.id}, function(err,questions) {
            if (err)
                res.send(err);
            res.send(questions);
        });
    });

    app.put('/api/addRemarks',function (req, res) {
        var id = req.body._id;

        patient_detail.findByIdAndUpdate({_id: id},req.body).then(function() {
            patient_detail.findOne({_id: id}).then(function(response) {
                res.send(response);
            });

        });
    });
};