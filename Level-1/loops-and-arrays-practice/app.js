let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
  /*  for(var i = 0; i <= 10; i++){
    console.count("computer")

    }
    */
   // create a function to loop through and count each computer
 /*
   function number(array,item){
    let n = 0;
    for(let i = 0; i <= array.length; i++){
        if(array[i] === item){n++}
    }
    console.log(n);
   }
   number(officeItems, "computer")
   */


   let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  //give each object a variable


  function allowed(object,element){
    for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    if(peopleWhoWantToSeeMadMaxFuryRoad[i][element] < 18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
    }else{
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
    }
    
   }
   allowed(peopleWhoWantToSeeMadMaxFuryRoad,"age")
   /*
   // created a for loop that adds
   console.log("Hi, I am " + users[i].name + " and I am " + users[i].age + " years old")
   */