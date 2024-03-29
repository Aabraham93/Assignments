

let readlineSync = require('readline-sync');

let playerName = readlineSync.question('Hello, Welcome to My RPG, May I have your name? ');
console.log(`Hi ${playerName},! Time to have some fun!`);

let inventory = []; // Initialize the player's inventory as an empty array

let playerHP = 100;

let game = true


while (game) { // Use a while loop to control the flow of the game while the user keeps walking
  let input = readlineSync.question('Enter "w" to go for a walk: ');

  if (input === 'w') {
    console.log('You start walking down the trail.');

    // Generate a random number between 0 and 1 to determine if a wild enemy has appeared
    let randomNum = Math.random();
    if (randomNum <= 1/3) { // Use a 1/3 chance of being attacked
      console.log('A wild enemy has appeared!');

      // Call the fight function to start the battle
      fight();
    }
  } else {
    console.log('Invalid entry.');
  } 
  if(playerHP<=0){
    console.log("GAME OVER")
    game= !game
  }
}

function fight() {
  console.log('You are in a battle!');
  
  let enemyHP = 100;

  // Choose a random enemy from a minimum of 3 different enemy names
  let enemyNames = ['Bear', 'Wolf', 'Mountain Lion'];
  let randomIndex = Math.floor(Math.random() * enemyNames.length);
  let enemyName = enemyNames[randomIndex];



  while ( enemyHP > 0) { 
    // Use a while loop to control the flow of the battle until either the player or the enemy has 0 or less health
    let action = readlineSync.question('Enter "a" to attack or "r" to run: ');

    if (action === 'a') { // If the user chooses to attack
      let damageNumbers= Math.floor(Math.random() *20)+10;
      // console.log(damageNumbers)
      // Generate a random amount of damage dealt between 10 and 20
      let playerDamage = Math.floor(Math.random()* damageNumbers); 
      enemyHP -= playerDamage;
      console.log(`You deal ${playerDamage} damage to the ${enemyName}.`);

      if (enemyHP <= 0) { // If the enemy dies
        console.log(`You defeated the ${enemyName}!`);

      

        // Add an item to the player's inventory and update their HP
        let item = 'BandAid';
        inventory.push(item);
        playerHP += 20;

        console.log(`You found a ${item} and gained 20 HP.`);
      } else { // If the enemy is still alive
        let enemyDamage = Math.floor(Math.random() * 10) + 1; 
        // Generate a random amount of damage dealt between 5 and 15
        playerHP -= enemyDamage;
        console.log(`The ${enemyName} deals ${enemyDamage} damage to you.`);

        console.log(`Player HP: ${playerHP}`);
        console.log(`${enemyName} HP: ${enemyHP}`);
      }

      if (playerHP<=20) {
      
        console.log("You've lost this fight.")
      }
    } else if (action === 'r') { // If the user chooses to run
      let randomNum = Math.random();
      if (randomNum <= 0.5) { // Use a 50% chance of escaping
        console.log('You ran away.');
        return; // End the battle
      } else { // If the escape attempt fails
        let enemyDamage = Math.floor(Math.random() *10 ) + 1

      }
    }
}
}
