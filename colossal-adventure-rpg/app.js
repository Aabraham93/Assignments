

let readlineSync = require('readline-sync');

let playerName = readlineSync.question('Hello, Welcome to My RPG, May I have your name? ');
console.log(`Hi ${playerName},! Time to have some fun!`);

let inventory = []; // Initialize the player's inventory as an empty array

while (true) { // Use a while loop to control the flow of the game while the user keeps walking
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
}

function fight() {
  console.log('You are in a battle!');

  // Choose a random enemy from a minimum of 3 different enemy names
  let enemyNames = ['Bear', 'Wolf', 'Mountain Lion'];
  let randomIndex = Math.floor(Math.random() * enemyNames.length);
  let enemyName = enemyNames[randomIndex];

  let playerHP = 100;
  let enemyHP = 100;

  while (playerHP > 0 && enemyHP > 0) { 
    // Use a while loop to control the flow of the battle until either the player or the enemy has 0 or less health
    let action = readlineSync.question('Enter "a" to attack or "r" to run: ');

    if (action === 'a') { // If the user chooses to attack
      let playerDamage = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Generate a random amount of damage dealt between 10 and 20
      enemyHP -= playerDamage;
      console.log(`You deal ${playerDamage} damage to the ${enemyName}.`);

      if (enemyHP <= 0) { // If the enemy dies
        console.log(`You defeated the ${enemyName}!`);

        // Add an item to the player's inventory and update their HP
        let item = 'BandAid';
        inventory.push(item);
        playerHP += 50;

        console.log(`You found a ${item} and gained 50 HP.`);
      } else { // If the enemy is still alive
        let enemyDamage = Math.floor(Math.random() * (15 - 5 + 1)) + 5; 
        // Generate a random amount of damage dealt between 5 and 15
        playerHP -= enemyDamage;
        console.log(`The ${enemyName} deals ${enemyDamage} damage to you.`);

        console.log(`Player HP: ${playerHP}`);
        console.log(`${enemyName} HP: ${enemyHP}`);
      }
    } else if (action === 'r') { // If the user chooses to run
      let randomNum = Math.random();
      if (randomNum <= 0.5) { // Use a 50% chance of escaping
        console.log('You successfully ran away.');
        return; // End the battle
      } else { // If the escape attempt fails
        let enemyDamage = Math.floor(Math.random() * (15 - 5 + 1))

      }
    }
}
}
