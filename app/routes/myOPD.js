const Patient = require('../models/patient_model');
const PatientDetails = require('../models/patient_details_model');
const Doctor = require('../models/doctor_model');
const DoctorQueue = require('../models/doctor_queue_model');

module.exports = function(app) {

    app.get('/myPatients/:DoctorName' ,function (req, res, next) {
        PatientDetails.find({DoctorName: req.params.DoctorName}).then(function (patientDetails) {
            res.send(patientDetails);
        });
    });



    //get a patient overview
    app.get('/patientOverview/:hin' , function (req,res){
        console.log(req.params.hin);

        Patient.findOne({HIN: req.params.hin}).then(function(patient) {
            //res.json(patient || {});
            res.send(patient);

        }).catch(function(err){
            console.error(err);
            res.sendStatus(500);
        });

    });

    //Update availability as false
    app.put('/doctors/:id/hold' , function (req,res) {

        req.body={availability:false};

        Doctor.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then(function(){
            Doctor.findOne({_id:req.params.id},{$set:req.body}).then(function(doctor){
                res.json(doctor);
                res.sendStatus(200);
            });
        }).catch(function(err){
            console.error(err);
            res.sendStatus(500);
        });

    });

    //Update availability as true
    app.put('/doctors/:id/resume' , function (req,res){

        req.body={availability:true};

        Doctor.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then(function(){
            Doctor.findOne({_id:req.params.id},{$set:req.body}).then(function(doctor){
                res.json(doctor);
                res.sendStatus(200);
            });
        }).catch(function(err){
            console.error(err);
            res.sendStatus(500);
        });

    });

    //get a doctor
    app.get('/doctor/:id', function(req,res){

        console.log(req.params.id);

        Doctor.findOne({_id: req.params.id}).then(function(response) {
            //res.json(doctor || {});
            console.log("found");
            res.send(response);

        }).then(function (err) {
            console.error("not found");
            res.sendStatus(500);
        });

    });

    app.post('/doctors',function (req, res, next) {

        Doctor.create(req.body).then(function (doctors) {
            res.send(doctors);
        });
    });



    //for search field
    app.get('/patients/:HIN',function (req, res, next) {
        console.log(req.params.HIN);
        PatientDetails.find({HIN: {$regex:req.params.HIN}}).then(function (response) {
            res.send(response);
        });
    });

    //get patient count
    app.get('/doctorQueue/:id',function (req, res, next) {
        console.log(req.params.id);
        DoctorQueue.find({doctor_id: req.params.id}).then(function (response) {

            res.send(response);
        });
    });


};