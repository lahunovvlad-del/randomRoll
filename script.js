let nickname = prompt("Enter your nickname");

if (nickname) {
    document.getElementById("playerName").textContent = nickname;
} else {
    document.getElementById("playerName").textContent = "User";
}

let playerScore = 0;
let aiScore = 0;
let playerWins = 0;
let aiWins = 0;

let playerWinCountDisplay = document.getElementById("playerWinCount");
let aiWinCountDisplay = document.getElementById("aiWinCount");

let button = document.getElementById("btn");
let showPlayerScore = document.getElementById("playerScore");
let showAI_Score = document.getElementById("aiScore");

button.addEventListener('click', () => {
    let playerPoints = Math.floor((Math.random() * 100) + 1);
    let aiPoints = Math.floor((Math.random() * 100) + 1);

    if (playerPoints > aiPoints) {
        playerScore += 1;
    } else if (aiPoints > playerPoints) {
        aiScore += 1;
    }
    
    showPlayerScore.innerHTML = playerPoints;
    showAI_Score.innerHTML = aiPoints;

    if (playerScore === 3 || aiScore === 3) {
        setTimeout(() => {
            if (playerScore === 3) {
                alert('Win is yours!');
                playerWins += 1;
                playerWinCountDisplay.textContent = "Wins: " + playerWins;
            } else {
                alert('Unfortunately you lost');
                aiWins += 1;
                aiWinCountDisplay.textContent = "Wins: " + aiWins;
            }
            
            playerScore = 0;
            aiScore = 0;
            showPlayerScore.innerHTML = playerScore;
            showAI_Score.innerHTML = aiScore;
        }, 50);
    }
});