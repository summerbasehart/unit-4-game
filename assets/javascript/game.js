var wins = 0;
var losses = 0;
var playerScore = 0;

var targetScore = [100, 102, 108, 114, 126, 132, 138, 144, 156, 162, 168, 174, 186, 192, 198];
var num1 = [2, 4, 8, 12];
var num2 = [3, 6, 9, 15, 21];
var num3 = [8, 12, 18, 24, 30, 36];
var num4 = [2, 8, 9, 15, 24, 21, 36];

window.onload = function () {
    var comChoice = targetScore[math.floor(math.random() * targetScore.length)];
    computerGuess.push(comChoice);
    console.log(computerGuess[0])
}

var blueGem = num1[math.floor(math.random() * num1.length)];
    
document.getElementById("BlueGem").onclick = function () {
    playerScore = num1 + playerScore;
    return playerScore;
}

var greenGem = num2[math.floor(math.random() * num2.length)];
    
document.getElementById("GreenGem").onclick = function () {
    playerScore = num2 + playerScore;
    return playerScore;
}

var whiteGem = num3[math.floor(math.random() * num3.length)];
    
document.getElementById("WhiteGem").onclick = function () {
     playerScore = num3 + playerScore;
     return playerScore;
}

var redGem = num4[math.floor(math.random() * num4.length)];

document.getElementById("RedGem").onclick = function () {
    playerScore = num4 + playerScore;
    return playerScore;
}

document.onkeyup = function(event) {
    var playerScore = event.key
        if (playerScore === targetScore) {
            wins++;
            playerScore = 0;
            var comChoice = targetScore[math.floor(math.random() * targetScore.length)]
        }
        else if (playerScore > targetScore) {
            losses++;
            playerScore = 0;
            var comChoice = targetScore[math.floor(math.random() * targetScore.length)]
        }
}


var html = "<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Target: " + targetScore + "</p>" +
"<p>Your Score: " + playerScore + "</p>";

document.querySelector("#game").innerHTML = html;

