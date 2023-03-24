const readlineSync = require("readline-sync")

//sum function
function addNumbers(num1, num2){
    return num1 + num2;
}
const sum = addNumbers

//subtract function
function subtractNumbers(num1, num2){
    return num1 - num2;
}
const sub = subtractNumbers

//multiply function
function multiplyNumbers(num1, num2){
    return num1 * num2;
}
const mult = multiplyNumbers

//divide function
function divideNumbers(num1,num2){
    return num1 / num2
}
const div = divideNumbers


//using defaultInput
firstNum = readlineSync.question('Please enter your first number.', {defaultInput: 'number'});

secondNum = readlineSync.question('Please enter your second number.', {defaultInput: 'number'})


//Limit the operation that can be selected. using keyInSelect method.
const operations = ['add','sub','mult','div']
const doIt = readlineSync.keyInSelect(operations, 'Please enter the operation to perform: add,sub,mult, div')

//execute create functions using if else
//index [0] is the same as pressing number 1
if(doIt === 0){
    console.log('The result is',sum(parseInt(firstNum), parseInt(secondNum)));
//index[1] is the same as pressing number 2
}   else if(doIt === 1){
        console.log('The result is',sub(parseInt(firstNum), parseInt(secondNum)))
    }else if(doIt === 2){
        console.log('The result is',mult(parseInt(firstNum), parseInt(secondNum)))
    }else if(doIt === 3){
        console.log('The result is',div(parseInt(firstNum), parseInt(secondNum)))
    } 
    









