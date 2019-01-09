var express = require('express');
var router = express.Router();

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
function removeAt(string, i) {
  return string.slice(0, i) + string.slice(i + 1);
}

var fs = require('fs');
var answer1 = 0;
var answer2 = 0;
var input = [0];
fs.readFile( __dirname + '/input2.txt', function (err, data) {
  if (err) {
    throw err; 
  }
  input = data.toString().split('\n');

  //Part1
  var twos = 0;
  var threes = 0;
  input.forEach(element => {
    var two = false;
    var three = false;
    for (var i = 0; i < element.length; i++) {
      var number = char_count(element, element.charAt(i));
      if (number == 2){
        two = true
      } if(number == 3){
        three = true
      }
    }
    if (two == true) {
      twos += 1
    } if (three == true) {
      threes += 1
    }
  });
  answer1 = twos * threes

  //Part2
  const ids = input;
  const inputLength = ids[0].length;
  for (let i = 0; i < inputLength; i++) {
      const shortIds = ids.map(id => removeAt(id, i));
      if (new Set(shortIds).size === ids.length) {
          // All Ids are unique
          continue;
      }
      const duplicates = shortIds.filter(
          (item, index) => shortIds.indexOf(item) != index
      );
      // Should only have one duplicate here we're looking for
      answer2 = duplicates[0];
  }
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('day', { title: 'Day2', answer1: answer1, answer2: answer2 });
});

module.exports = router;
