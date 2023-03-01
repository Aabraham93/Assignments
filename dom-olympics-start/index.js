//QUALIFIER


var newHeader = document.createElement("h1")
newHeader.textContent ="JavaScript Made This!!"
//newHeader.style.textAlign ="center"
var myHead = document.getElementById("header")
myHead.append(newHeader)

/*
var myName = document.createElement("span")
myName.textContent ="[Anthony Abraham]"
myName.style.color ="gold"
var placement = document.getElementById("header")
placement.append(myName)
*/

var myName = document.getElementById("header")
myName.innerHTML += "<span id='change'>[Anthony Abraham]</span>"
document.getElementById("change").style.color ="gold"

var theRest = document.createElement("span")
theRest.textContent ="wrote this JavaScript"
var placement = document.getElementById("header")
placement.append(theRest)

