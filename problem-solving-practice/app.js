/*
Write a function that takes an array of numbers and returns the largest (without using Math.max())
*/
var numbers = [11, 12, 13, 50, 40]


// the loop starts at index 1 instead of 0, because we have already set maxNumber to the first element in the array.
function max (numbers){
    var maxNumber= numbers[0];

    for(var i = 1; i< numbers.length; i++){
        if(numbers[i]>maxNumber ){
            maxNumber=numbers[i];
        }
    }
    return maxNumber;
}
/*testing it out to make sure it works*/
var results= max(numbers)
console.log(results)


/*
Write a function that takes an array of words and a character and returns each word that has that character present.
*/
let words = ["diamond", "yellow", "shoes","sprung", "apple", "a"]

function findMe(array, character){
    let results = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].includes(character)){
            results.push(array[i]);
        }
    }

    return results;
}

// Call the function with the desired character
let matches = findMe(words, "o");

// Log the results to the console
console.log(matches);

// Inside the function, we've initialized a new array called results, which will store all the elements that match the criterion. We then loop through the array parameter and check whether each element contains the desired character using the includes method. If the element matches the criterion, we push it to the results array. Finally, we return the results array.



/*
Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
*/


function isDivisible(num1, num2) {
    if (num1 % num2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let result = isDivisible(20, 10);
  console.log(result);
  

