let score = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        score++;
    }
    if ((userChoice === 'paper' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'paper')) {
    score--;
}
    document.getElementById('score').textContent = score;
}

function showRules() {
    document.getElementById('rulesModal').style.display = 'flex';
}

function hideRules() {
    document.getElementById('rulesModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('rulesModal')) {
        hideRules();
    }
}