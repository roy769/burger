//dependencies

var express = require("express");

var router = express.Router();

//import the model burgers
var burgerTime = require("../models/burger.js");

//route it
router.get("/", function(req, res)
  {
      burgerTime.selectAll(function(data)
      {
          var hbsObject =
          {
            burgers: data
          };
              console.log(hbsObject);
                res.render("index", hbsObject);
      });
  });

  router.post("/", function(req,res)
    {
        burgerTime.insertOne(
          ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
              function()
              {
                  res.redirect("/");
              });
    });
  router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burgerTime.delete(
    condition, function()
  {
    res.redirect("/");
  });
});

console.log("head");
module.exports = router;
