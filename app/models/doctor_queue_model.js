const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const DoctorQueueSchema = new Schema({
	doctor_id:{
		type:String
	},

	PQueue :[{
		hin : String,
		queueNo : Number
	}]

});

const DoctorQueue = mongoose.model('doctorQueue' , DoctorQueueSchema);

module.exports = DoctorQueue;
