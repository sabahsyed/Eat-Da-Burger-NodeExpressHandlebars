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
router.post("/api/burgers", function (req, res) {
    burger.create(req.body.name,function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.id });
    });
  });



  router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id ;
  
    console.log("condition", condition);
    burger.update(
      {
        burger_data: req.body.name,
      },
      condition,
      function (result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });


module.exports =  router;



