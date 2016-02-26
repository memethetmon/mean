// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var List = mongoose.model('List');

module.exports = (function() {

  return {
    getLists: function(req, res){
      List.find({}, function(err, results) {
        if(err) {
          console.log(err);
        }
        else {
          res.json(results);
        }
      })
    },

    createList: function(req, res){

      var list = new List(req.body);
      list.save(function(err){
        if(err)console.log(err);
        res.json(true);
      })
    }
  }
})();