/*
function Car(make, model, year){
    this.make = make
    this.model= model
    this.year= year
}

var jeep = new Car("Dodge","Challenger",2015)

console.log(jeep)
*/

var employees = []

function Employee(name, jobTitle, salary, status){
    this.name= name
    this.jobTitle= jobTitle
    this.salary= salary
    this.status= "Full-Time"

    Employee.prototype.printEmployeeForm = function(){
        console.log("Name: " + this.name +", " + "Job Title: "+ this.jobTitle + ", " +"Salary: "+ this.salary + ", " + "Status:  " +this.status)
    }
}
 
var joe = new Employee("Joe","Manager","$45/hour","Part-time")
joe.printEmployeeForm()
employees.push(joe)

var jack = new Employee("Jack","Salesperson","$15/hour","Part-time")
jack.printEmployeeForm()
employees.push(jack)

var jill = new Employee("Jill","Driver","$30/hour", "Contract")
jill.printEmployeeForm()
employees.push(jill)

console.log(employees)