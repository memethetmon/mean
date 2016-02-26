var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: String,
	list: [{
		title: String,
		description: String,
		name: String,
		  // // doneList: [doneLists],
		  // _user: {type: Schema.Types.ObjectId, ref: "User"},
		created_at: {type: Date, default: Date.now}
	}]
});

mongoose.model('User', UserSchema);