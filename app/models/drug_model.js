'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    drugName: {
        type: String,
        required: true
    },
    dosage: {
        type: int,
        required: true
    },
    frequency: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },

});

const Drug = mongoose.model('Drug', DrugSchema);

module.exports = Drug;