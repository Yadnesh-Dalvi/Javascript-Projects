// Global variables
let Player1_runs = 0;
let Player2_runs = 0;
let Target = 0;
let isPlayer1Batting = true; // Track whose turn it is

document.getElementById("Play").addEventListener("click", function () {
    // Generate random numbers (1 to 6) for both players
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Set image sources
    let randomImageSource = "static/" + randomNumber1 + ".png";
    let randomImageSource1 = "static/" + randomNumber2 + ".png";

    document.getElementsByClassName("Player1")[0].src = randomImageSource;
    document.getElementsByClassName("Player2")[0].src = randomImageSource1;

    // Check if Player 1 is batting
    if (isPlayer1Batting) {
        if (randomNumber1 === randomNumber2) {
            Target = Player1_runs + 1; // Set target for Player 2
            document.querySelector("h3").innerHTML = "Out! Target for Player 2 is: " + Target;
            isPlayer1Batting = false; // Switch to Player 2
            Player1_runs = 0; // Reset Player 1's runs
        } else {
            Player1_runs += randomNumber1;
            document.querySelector("h3").innerHTML = "Total Runs for Player 1: " + Player1_runs;
        }
    } 
    
    // If Player 1 is out, Player 2 starts batting
    else {
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h3").innerHTML = "Out! Player 2's Score: " + Player2_runs;
            // Compare scores
            if (Player2_runs >= Target) {
                document.querySelector("h3").innerHTML += ", Player 2 Wins!";
            } else {
                document.querySelector("h3").innerHTML += ", Player 1 Wins!";
            }
            // Reset game (optional)
            isPlayer1Batting = true;
            Player1_runs = 0;
            Player2_runs = 0;
            Target = 0;
        } else {
            Player2_runs += randomNumber2;
            document.querySelector("h3").innerHTML = "Total Runs for Player 2: " + Player2_runs;
        }
    }
});
