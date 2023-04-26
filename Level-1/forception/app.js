/*
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    //create blank var
    var results = []
  //split the alphabet into strings
    var splitAlphabet = alphabet.split("")
    //create a for loop to loop through nested arrays too
    for( var i=0; i< people.length; i++){
        for( var j= 0; j<splitAlphabet.length; j++){
            results.push(people[i] + ": " + splitAlphabet)
        }
    }
    return results;
}

console.log(forception(people, alphabet));
*/

function forception(people, alphabet) {
    var result = [];
  
    for (var i = 0; i < people.length; i++) {
      result.push(people[i] + ":");
  
      for (var j = 0; j < alphabet.length; j++) {
        result.push(alphabet[j].toUpperCase());
      }
    }
  
    return result;
  }
  
  var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
  var output = forception(people, alphabet);
  console.log(output);
  
