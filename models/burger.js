var orm  = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers",function(res) {
        cb(res);
      });
    },
    create : function(name,cb){
        orm.create("burgers",["burger_name","devoured"],[name,false],cb)
    },
    update : function(condition, cb){
      // var condition = "id = " +id ;
      orm.update("burgers",{devoured: true}, condition, cb)
  }
}
module.exports = burger;