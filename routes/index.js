var express = require('express');
var request = require('request');
var router = express.Router();

/* GET SUPER. */
router.get('/searchsuper', function(req, res, next) {
    console.log("Q val: ", req.query.q);
  var superRest = "https://superheroapi.com/api/10219934950195092/search/" + req.query.q ;
  console.log("super rest: " + superRest);
  request(superRest).pipe(res);
});

module.exports = router;
