/**
 * Created by Naditha on 7/3/2017.
 */
const queue = require('../models/doctor_queue_model');

module.exports = function(app) {
    app.post('/HIS/queue',function (req, res, next) {

        queue.create(req.body).then(function (response) {
            res.send(response)
        }).catch(next)

    });

    app.put('/HIS/queue/:id',function (req, res, next) {

        queue.update({doctor_id: req.params.id}, {$push: {PQueue: {hin : req.body, $inc : {queueNo : 1}}}}).then(function (response) {
            queue.findOne({doctor_id: req.params.id}).then(function (response) {
                res.send(response);
            }).catch(next)

        });

    });
}






