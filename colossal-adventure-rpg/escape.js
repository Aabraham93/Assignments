const readline = require("readline-sync");
const name = readline.question("What is your name?")
console.log(`Hi ${name}, Let's try to find the key so we can escape!`)

//List places for player to look.
const start = ['Find the key', 'Open the door','Put hand in hole']

for(let i = 0; i <= 3; i++){

   
//set if key is found or not what happens in loop
let foundKey = false;

// the exclamation point makes it loop through until foundkey is true 
while(!foundKey){
//Let them pick where they want to look.
   index = readline.keyInSelect(start, `What do you want to do first?`);
   if(index === 2 ){
    console.log(`Oh No! You're Dead`)
    break ; //exit loop 
}   
    else if(index === 0){
    console.log("You found the key! Now you can escape!");
    foundKey=true
    break;

}   else if(index ===1){
    console.log("The door is locked, find the key first!")
    break;

}if(foundKey=true){
    console.log("You've escaped! Congrats!")
}
}
}

    





