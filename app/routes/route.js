const express = require('express');

const router = express.Router();
const Patient = require('../Models/patient_model')
const Doctor = require('../Models/doctor_model')
const Queue = require('../Models/doctor_queue_model')

// patient route start
//get a list of patient
router.get('/patient',function (req, res, next) {
    Patient.find().then(function (response) {
        res.send(response);
    });
});

//get patient by id
router.get('/patients/:id',function (req, res, next) {
  //console.log(req.params.id);
    Patient.findOne({_id: req.params.id}).then(function (response) {
        res.send(response);
    });
});


//for search
router.get('/patient/:hin',function (req, res, next) {
    console.log(req.params.hin);
    Patient.find({HIN: {$regex:req.params.hin}}).then(function (response) {
        res.send(response);
    });
});


//add a patient
router.post('/patient',function (req, res, next) {

    Patient.create(req.body).then(function (response) {
        res.send(response)
    }).catch(next)

});

//update data
router.put('/patient/:id',function (req, res, next) {
    Patient.findByIdAndUpdate({_id: req.params.id},req.body).then(function() {
        Patient.findOne({_id: req.params.id}).then(function(response) {
            res.send(response);
        });

    });
});

//delete data
router.delete('/patient/:id',function (req, res, next) {
    Patient.findByIdAndRemove({_id: req.params.id}).then(function (response) {
        res.send(response);
    })

});



//patient route end


// doctor routes start

//get doctors by type and availability
router.get('/doctors/:type/:as' ,function (req, res, next) {
    Doctor.find({type: req.params.type , availability: req.params.as}).then(function (doctors) {
        res.send(doctors);
    });
});


//post a doctor
router.post('/doctors',function (req, res, next) {
 		const doctor = new Doctor(req.body);
		doctor.save().then(function (doctors) {
			res.json(doctors);
		});
});

//doctor route end

//doctors queue start
//add a patient to the queue with doctor id and patient details
router.post('/addPatientToQueue',function (req, res, next) {

	const queue = new Queue(req.body);
		queue.save().then(function (patientQueue) {
			res.json(patientQueue);
		});
});

module.exports = router;
