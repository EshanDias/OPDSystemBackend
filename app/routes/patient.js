const Patient = require('../models/patient_model');


module.exports = function(app) {

    //get a list of patient
    app.get('/HIS/patient',function (req, res) {
        Patient.find().then(function (response) {
            res.send(response);
        });
    });

    app.get('/HIS/patients/:id',function (req, res) {
        console.log("id which comes to the backend "+req.params.id);
        Patient.findOne({_id: req.params.id}, function (err, response) {
            if (err) {
                console.log(err);
            }
            else {
                res.send(response);
            }
        });
    });

    //for search
    app.get('/HIS/patient/:hin',function (req, res) {
        console.log(req.params.hin);
        Patient.find({HIN: {$regex:req.params.hin}}).then(function (response) {
            res.send(response);
        });
    });


    //add a patient
    app.post('/HIS/patient',function (req, res, next) {

        Patient.create(req.body).then(function (response) {
            res.send(response)
        }).catch(next)

    });

    //update data
    app.put('/HIS/patient/:id',function (req, res) {
        Patient.findByIdAndUpdate({_id: req.params.id},req.body).then(function() {
            Patient.findOne({_id: req.params.id}).then(function(response) {
                res.send(response);
            });

        });
    });

    //delete data
    app.delete('/HIS/patient/:id',function (req, res) {
        Patient.findByIdAndRemove({_id: req.params.id}).then(function (response) {
            res.send(response);
        })

    });

    
};