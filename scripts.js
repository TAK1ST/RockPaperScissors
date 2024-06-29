let score = 0;

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
    score++;
    result = 'Win';
    } else if ((userChoice === 'paper' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'rock') ||
        (userChoice === 'rock' && computerChoice === 'paper')) {
    score--;
    result = 'Lost';
    } else {
    result = 'Draw';
    }
    document.getElementById('score').textContent = score;
    displayResultMessage(result);

    if (score === 10) {
        showFireworks();
    }

    //create display result. (Win,Lost,Draw)
    function displayResultMessage(result) {
        const message = document.createElement('div');
        message.className = 'result-message';
        message.textContent = result;
        document.body.appendChild(message);

        // Remove the message after the animation completes (1 seconds)
        setTimeout(() => {
            message.remove();
        },1000);
    }
}

function showRules() {
    document.getElementById('rulesModal').style.display = 'flex'; // change rulesModal none to  flex.
}

function hideRules() {
    document.getElementById('rulesModal').style.display = 'none'; 
}

window.onclick = function(event) {
    if (event.target == document.getElementById('rulesModal')) {
        hideRules();
    }
}

function showFireworks() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.id = 'fireworks-container';
    document.body.appendChild(fireworksContainer);

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        fireworksContainer.appendChild(firework);
    }

    setTimeout(() => {
        fireworksContainer.remove();
    }, 1000);
}