var express = require('express');
var router = express.Router();

Array.prototype.contains = function ( needle ) {
  for (i in this) {
      if (this[i] == needle) return true;
  }
  return false;
}

var fs = require('fs');
var answer1 = 0;
var answer2 = 0;
fs.readFile( __dirname + '/input1.txt', function (err, data) {
  if (err) {
    throw err; 
  }

  var freq = Array();
  var found = false;
  var temp = data.toString().split('\n');
  temp.forEach(element => {
    answer1 += parseInt(element);
      if (freq.contains(answer1) && found != true) {
        answer2 = answer1;
        found = true;
        console.log(freq);
        console.log("YESSS");
      };
    freq.push(answer1);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Day1', answer1: answer1, answer2: answer2 });
});

module.exports = router;
