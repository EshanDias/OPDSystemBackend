const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const DoctorSchema = new Schema({
	name:{
		type:String,
		required:[true, 'Name feild is required']

	},
	NIC : {
		type:String,
		required:[true, 'NIC feild is required']
	},
	type:{
		type:String
	},

	availability:{
		type:Boolean,
		default:true
	}

});

const Doctor = mongoose.model('doctor' , DoctorSchema);

module.exports = Doctor;
