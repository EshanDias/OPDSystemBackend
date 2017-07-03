const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
	HIN :{
		type:String,
		required:[true, 'HIN feild is required']
	},
  name :{
		type:String,
		required:[true, 'Name feild is required']
	},
	DOB:{
		type:String
	},
	gender : {
		type:String
	},
	civilStatus: {
		type:String
	},
	NIC : {
		type:String,
		required:[true, 'NIC feild is required']
	},
	phone : {
		type:Number
	},
	address :{
		type:String
	}

});

const Patient = mongoose.model("Patient",patientSchema );

module.exports = Patient;
