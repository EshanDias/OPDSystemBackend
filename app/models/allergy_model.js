const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllergySchema = new Schema({
	HIN:{
		type:String,
		required:[true, 'Name feild is required']
		
	},
	date:{
		type: Date,
		default: Date.now
	},
	
	allergy:{
		type:String
	}
	
});

const Allergy = mongoose.model('allergy' , AllergySchema);

module.exports = Allergy;