const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const ExaminedPatientSchema = new Schema({
	doctor_id:{
		type:String
	},
	
	PQueue :[{
		hin : String,
		queueNo : int
	}]
		
});

const ExaminedPatient = mongoose.model('examinedPatient' , ExaminedPatientSchema);

module.exports = ExaminedPatient;