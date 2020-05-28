var express =  require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req,res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    // express callback response by calling burger.selectAllBurger
    console.log("Inside /burgers route");
    burger.selectAll(function(burgerData) {
        console.log(burgerData);
      // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("index", { burger_data: burgerData });
    });
});




module.exports =  router;