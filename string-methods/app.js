//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
/*
var hello = "hello"

function both(string){
    var upper = string.toUpperCase()
    console.log(upper)
    var lower = string.toLowerCase()
    console.log(lower)
    var word = upper.concat(lower)
    console.log(word)
}
both(hello)
*/

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

var hello = "helloworld"

function index(half){
    var halfIndex = Math.floor(half.length /2)
    return halfIndex
}
/*
index(hello)
*/
//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(str) {
    var halfIndex = index(str); // Call index() to get the half index
    var firstHalf = str.slice(0, halfIndex); // Use slice() to get the first half of the string
    return firstHalf;
  }
  
  var result = returnFirstHalf(hello);
  console.log(result);

  