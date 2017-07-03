const Visit = require('../Models/patient_details')
// const Drug = require('../Models/drug')

module.exports = function(app) {
//post a visit
app.post('/visits',function (req, res, next) {
    const visit = new Visit(req.body);
    visit.save().then(function (visits) {
        res.json(visits);
    });
});

//post a drug
app.post('/drugs',function (req, res, next) {
    const drug = new Drug(req.body);
    drug.save().then(function (drugs) {
        res.json(drugs);
    });
});

//get paitent details

};