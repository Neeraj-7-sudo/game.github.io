// Function to play a sound
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function startGame() {
    document.getElementById('start-game').style.display = 'none';
    document.getElementById('description').innerText = 'Solve the Memory Lane Puzzle!';
    loadMemoryLanePuzzle();
}

function loadMemoryLanePuzzle() {
    const puzzleContainer = document.getElementById('game-content');
    puzzleContainer.innerHTML = `
        <p>Unscramble the word below to reveal a memory!</p>
        <div class="captcha-code">GNIROMN</div>
    `;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Unscramble the word';

    const checkButton = document.createElement('button');
    checkButton.innerText = 'Check';
    checkButton.onclick = () => {
        playSound('moan1.mp3');
        if (input.value.toUpperCase() === 'MORNING') {
            alert('Correct! Proceed to the next challenge.');
            loadCookingChallenge();
        } else {
            alert('Try again!');
        }
    };

    puzzleContainer.appendChild(input);
    puzzleContainer.appendChild(checkButton);
}

function loadCookingChallenge() {
    const cookingContainer = document.getElementById('game-content');
    cookingContainer.innerHTML = `
        <p>Create a virtual dish by selecting the correct ingredients!</p>
        <p>Select top three favourite ingredients of yours.</p>
    `;

    const ingredients = ['Butter', 'Papad', 'Krupuk', 'Salt', 'Pepper'];
    const selectedIngredients = [];

    ingredients.forEach(ingredient => {
        const button = document.createElement('button');
        button.innerText = ingredient;
        button.onclick = () => {
            playSound('moan2.mp3');
            selectedIngredients.push(ingredient);
            button.disabled = true;
            if (selectedIngredients.length === 3) {
                checkCookingChallenge(selectedIngredients);
            }
        };
        cookingContainer.appendChild(button);
    });
}

function checkCookingChallenge(selectedIngredients) {
    const correctIngredients = ['Butter', 'Papad', 'Krupuk'];
    if (JSON.stringify(selectedIngredients) === JSON.stringify(correctIngredients)) {
        alert('Dish prepared successfully! Move to the next task.');
        loadKindnessQuest();
    } else {
        alert('Oops! That’s not quite right. Try again!');
        loadCookingChallenge();
    }
}

function loadKindnessQuest() {
    const kindnessContainer = document.getElementById('game-content');
    kindnessContainer.innerHTML = `
        <p>Choose an act of kindness from the options below:</p>
    `;

    const acts = ['Write a note', 'Help a friend', 'Donate to charity'];
    acts.forEach(act => {
        const button = document.createElement('button');
        button.innerText = act;
        button.onclick = () => {
            playSound('moan3.mp3');
            alert(`You chose to: ${act}. A kind heart is always rewarded!`);
            loadTreasureHunt();
        };
        kindnessContainer.appendChild(button);
    });
}

function loadTreasureHunt() {
    const treasureContainer = document.getElementById('game-content');
    treasureContainer.innerHTML = `
        <p>Solve the riddle to find the treasure:</p>
        <p>What has keys but can’t open locks?</p>
    `;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Your answer here';

    const checkButton = document.createElement('button');
    checkButton.innerText = 'Check Answer';
    checkButton.onclick = () => {
        playSound('moan4.mp3');
        if (input.value.toLowerCase() === 'piano') {
            alert('You found the treasure! Now for the final task.');
            loadMysteryCode();
        } else {
            alert('Wrong answer, try again!');
        }
    };

    treasureContainer.appendChild(input);
    treasureContainer.appendChild(checkButton);
}

function loadMysteryCode() {
    const codeContainer = document.getElementById('game-content');
    codeContainer.innerHTML = `
        <p>Decode this message to reveal your final clue:</p>
        <p class="captcha-code">bG92ZSB5b3UgYmFiZQ==</p>
    `;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Decoded message';

    const checkButton = document.createElement('button');
    checkButton.innerText = 'Submit';
    checkButton.onclick = () => {
        playSound('moan5.mp3');
        if (input.value.toLowerCase() === 'love you babe') {
            alert('Congratulations! You have completed the adventure.');
            showFinalSurprise();
        } else {
            alert('Incorrect, try again!');
        }
    };

    codeContainer.appendChild(input);
    codeContainer.appendChild(checkButton);
}

function showFinalSurprise() {
    const finalContainer = document.getElementById('game-content');
    finalContainer.innerHTML = '<p>Thank you for playing! Here\'s your surprise:</p>';

    const message = document.createElement('div');
    message.innerHTML = `
        <h2>Happy Birthday, Jetii!</h2>
        <p>Thank you for being such a wonderful and innocent girl. I appreciate and love you so much!</p>
        <p>Here's to more adventures together. The secret code for next challenge is "iloveyourbutt".</p>
    `;

    finalContainer.appendChild(message);
}
