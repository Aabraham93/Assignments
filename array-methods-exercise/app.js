var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//1.
vegetables.pop()
console.log(vegetables)

//2.
fruit.shift()
console.log(fruit)

//3.
var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

//4.
fruit.push(orangeIndex)
console.log(fruit)

//5.
var veggiesLength = vegetables.length
console.log(vegetables.length)

//6.
vegetables.push(veggiesLength)
console.log(vegetables)

//7.
var food = fruit.concat(vegetables)
console.log(food)

//8.
food.slice(4,2)
console.log(food)

//9.
food.reverse()
console.log(food)

//10.
var foodString = food.join(",");
console.log(foodString)