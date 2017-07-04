const Patient = require('../models/patient.js');
const PatientDetails = require('../models/patient_details.js');
const Doctor = require('../models/doctor.js');
const DoctorQueue = require('../models/doctor_queue.js');

module.exports = function(app) {

    app.get('/myPatients/:DoctorName' ,function (req, res, next) {
        PatientDetails.find({DoctorName:req.params.DoctorName}).then(function (patientDetails) {
            res.send(patientDetails);
        });
    });

    //get a patient overview
    app.get('/patient/:id' , (req,res)=>{
        console.log(req.params.id);

        Patient.findById({_id:req.params.id}).then(patient => {
            res.json(patient || {});

        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

    });

    //Update availability as false
    app.put('/doctors/:id/hold' , (req,res)=>{

        req.body={availability:false};

        Doctor.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then(function(){
            Doctor.findOne({_id:req.params.id},{$set:req.body}).then(doctor =>{
                res.json(doctor);
                res.sendStatus(200);
            });
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

    });

    //Update availability as true
    app.put('/doctors/:id/resume' , (req,res)=>{

        req.body={availability:true};

        Doctor.findByIdAndUpdate({_id:req.params.id},{$set:req.body}).then(function(){
            Doctor.findOne({_id:req.params.id},{$set:req.body}).then(doctor =>{
                res.json(doctor);
                res.sendStatus(200);
            });
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

    });

    //get a doctor
    app.get('/doctor/:id' , (req,res)=>{
        console.log(req.params.id);

        Doctor.findById({_id:req.params.id}).then(doctor => {
            res.json(doctor || {});

        }).catch(err => {
            console.error(err);
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