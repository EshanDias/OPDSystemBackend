const Doctor = require('../models/doctor_model');

module.exports = function(app) {

    app.get('/doctors/:type/:as' ,function (req, res, next) {
        Doctor.find({type: req.params.type , availability: req.params.as}).then(function (doctors) {
            res.send(doctors);
        });
    });

};