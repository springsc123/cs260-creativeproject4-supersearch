var express = require('express');
var request = require('request');
var router = express.Router();

/* GET SUPER. */
router.get('/searchsuper', function(req, res, next) {
  var superRest = "https://owlbot.info/api/v1/dictionary/" + req.query.q + "?format=json";
  console.log("super rest: " + superRest);
  request(superRest).pipe(res);
});

module.exports = router;
