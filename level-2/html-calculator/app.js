const problem = document.querySelector("#entire")

    //sum function
    function addNumbers(num1, num2){
        return num1 + num2;
    }

problem.addEventListener("submit", (e) => {
    e.preventDefault()

    //parseInt() is used to turn strings in numbers
    const num1=parseInt(problem.number1.value)
    const num2= parseInt(problem.number2.value)
    problem.number1.value=" "
    problem.number2.value=" "


const sum = addNumbers(num1,num2)

const h1 = document.createElement('h1')
    const newText = document.createElement('div');
    newText.textContent= sum;
    h1.append(newText)

    document.querySelector("body").append(h1);
})

//create function out side so its global.

function subtract(num1,num2) {
    return num1 - num2;
}

problem.addEventListener("submit", (e)=> {
    e.preventDefault()

    const num3= parseInt(problem.number3.value)
    const num4= parseInt(problem.number4.value)
    problem.number3.value= " "
    problem.number4.value= " "

    const minus= subtract(num3,num4)

    const h2 = document.createElement('h2')
    const newText = document.createElement('div');
    newText.textContent= minus;
    h2.append(newText)

    document.querySelector("body").append(h2);

})

function multiply(num1,num2) {
    return num1 * num2;
}
problem.addEventListener("submit", (e)=> {
    e.preventDefault()
//SAVE THE VALUE AND CLEAR THE BOX WHEN SUBMIT IS SENT.
    const num5= parseInt(problem.number5.value)
    const num6= parseInt(problem.number6.value)
    problem.number5.value= " "
    problem.number6.value= " "

    const times= multiply(num5,num6)
//CREATE ELEMENTS AND APPEND TO THE BODY
    const h3 = document.createElement('h3')
    const newText = document.createElement('div');
    newText.textContent= times;
    h3.append(newText)

    document.querySelector("body").append(h3);

})
