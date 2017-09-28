//import the ORM and create interactive functions

var orm = require('../config/orm.js');

var burgerTime = {
  selectAll: function(cb)
  {
      orm.selectAll("burgers", function(res)
      {
          cb(res);
      });
  },
  insertOne: function(cols, vals, cb)
  {
      orm.insertOne("burgers", cols, vals, function(res)
      {
          cb(res);
      });
  },
  updateOne: function(objColVals, condition, function(res)
  {
    cb(res)
  });
},
