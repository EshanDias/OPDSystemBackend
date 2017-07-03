const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientDetailsSchema = new Schema({
	HIN:{
		type:String,
		required:[true, 'HIN feild is required']
	},

	injury:{
		type:String
	},

	visit_type :{
		type: String
	},

	date :{
		type: Date,
		default: Date.now
	},

	DoctorName:{
		type:String
	},

	PatientName:{
		type:String
	},

	height :{
		type :Number
	},

	weight :{
		type :Number
	},

	BMI : {
		type:Number
	},

	temperature: {
		type: Number
	},

	BloodPreasure: {
		type:Number
	}
});

const PatientDetails = mongoose.model('patientDetails' , PatientDetailsSchema);

module.exports = PatientDetails;
