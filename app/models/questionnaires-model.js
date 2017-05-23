var mongoose = require('mongoose');

module.exports = mongoose.model('questions', {
    question : {type : String, default: ''},
    answer : {type : String, default: ''},
    date : {type : Date, default: Date.now },
    HIN : {type: String, default: ''}
});
