// Game states
// "win" - Player robot has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"Lose" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", 'amy android', 'robo trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player picks 'skip' confirm and then stop the loop
        if (promptFight === 'skip' || promptFight === 'SKIP' || promptFight === 'Fuck No') {
            // confirm player wants to skip
            var confirmSkip = window.confirm('Are you sure you would like to quit?')

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to be a little bitch!');
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log('playerMoney', playerMoney)
                break;
            }
        }
            // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth'variable
            enemyHealth = enemyHealth - playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(
            playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died ");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and us that result to update the value in the 'playerHealth' variable.
            playerHealth = playerHealth - enemyAttack;
            //Log a resulting message to the console so that we know it worked.
            console.log(
                enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    };

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}