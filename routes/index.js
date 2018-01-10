/*
var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;
*/

module.exports = function (io) {
  var express = require('express');
  var router = express.Router();


  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'Express'
    });
  });

  // socket.io events
  io.on("connection", function (socket) {
    console.log("A user connected");
  });


  return router;
}