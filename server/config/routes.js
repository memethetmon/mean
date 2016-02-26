var user = require('./../controllers/user.js');
var lists = require('./../controllers/lists.js');

module.exports = function(app) {
	app.post('/user', user.login)
	app.get('/user', user.getUsers)
	app.get('/user/:id', user.showProfile)
	app.post('/lists', lists.createList)
	app.get('/lists', lists.getLists)
}