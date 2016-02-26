var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		login: function(req, res) {
			console.log(req.body);

			User.findOne({name: req.body.name}, function(err, user) {
				if(err)
					console.log(err);
				else if(user)
					res.json(user);
				else {
					var newUser = new User(req.body);
					newUser.save(function(err) {
						if(err)
							console.log(err);
						else
							res.json(newUser);
					})
				}
			})
		},
		getUsers: function(req, res) {
			User.find({}, function(err, users) {
				if(err)
					console.log(err);
				res.json(users);
			})
		},
		showProfile: function(req, res) {
			User.findOne({_id: req.params.id}, function(err, user) {
				if(err)
					console.log(err);
				console.log(user);
				res.json(user);
			})
		},
		getLists: function(req, res){
	      User.find({}, function(err, results) {
	        if(err) {
	          console.log(err);
	        }
	        else {
	          res.json(results);
	        }
	      })
	    },

	    createList: function(req, res){

	      var list = new User(req.body);
	      list.save(function(err){
	        if(err)console.log(err);
	        res.json(true);
	      })
	    }
	}
})();