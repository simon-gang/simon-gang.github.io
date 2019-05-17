import api from './services/api.js';
import turnAllOff from './turn-all-off.js';
import loadProfile from './services/load-profile.js';

// declaring global variables and referencing DOM elements
const startButton = document.getElementById('start-button');
const hallButton = document.getElementById('hall-button');
const lights = document.querySelectorAll('.light');
const winMessage = document.getElementById('win');
const nameBar = document.getElementById('name');
const levelBar = document.getElementById('level');
const orbSound = new Audio('./assets/chime.wav'); 
const redOrb = document.getElementById('red');
const blueOrb = document.getElementById('blue');
const greenOrb = document.getElementById('green');
const yellowOrb = document.getElementById('yellow');


let count = 1;
let sequence;
let tracking = false;
let position = 0;

loadProfile();

//generates the computer array of numbers
function genSequence() { //rename
    sequence = [];
    for(let i = 0; i < count; i++) {
        sequence.push(Math.floor(Math.random() * 4));
    }
}


//this is making the lights light up depending on their position in the array
function playSequence() {
    
    let i = 0;
    
    const interval = setInterval(() => {
        turnAllOff();
        
        if(i === sequence.length) {
            clearInterval(interval);
            tracking = true;
        }
        else {
            setTimeout(() => {
                const indexToPlay = sequence[i];
                const lightToPlay = lights[indexToPlay];
                lightToPlay.classList.add('on');
                
                i++;
                
            }, 300);
        }
    }, 850);
}

//starts the play function
startButton.addEventListener('click', () => {
    genSequence();
    playSequence();
    orbSound.play();
    position = 0;
    winMessage.innerHTML = '';
    startButton.classList.add('opacity');
    nameBar.classList.remove('hideMessages');
    levelBar.classList.remove('hideMessages');
    startButton.classList.remove('addOpacity');
    hallButton.classList.add('opacity');
    hallButton.classList.remove('addOpacity');
    redOrb.classList.remove('red-all');
    blueOrb.classList.remove('red-all');
    greenOrb.classList.remove('red-all');
    yellowOrb.classList.remove('red-all');
    redOrb.classList.add('red');
    blueOrb.classList.add('blue');
    greenOrb.classList.add('green');
    yellowOrb.classList.add('yellow');
});
    
for(let i = 0; i < lights.length; i++) {
    const currentElement = lights[i];
    currentElement.addEventListener('click', () => {
    
        if(!tracking) {
            return;
        }
        currentElement.classList.add('on');
        setTimeout(() => {
            currentElement.classList.remove('on');
            const correct = sequence[position]; 
            const guess = i;
            position++;
            compare(correct, guess);
        }, 400); 
    });
}

function compare(correct, guess) {
    if(correct !== guess) {
        setLevel(count);
        count = 1;
        tracking = false;
        startButton.innerHTML = 'PLAY AGAIN?';
        startButton.classList.remove('opacity');
        startButton.classList.add('addOpacity');
        nameBar.classList.add('hideMessages');
        levelBar.classList.add('hideMessages');
        winMessage.innerHTML = 'EEK! YOU LOSE!';
        hallButton.classList.remove('opacity');
        hallButton.classList.add('addOpacity');
        levelBar.innerHTML = 'level: 1';
        redOrb.classList.remove('red');
        redOrb.classList.add('red-all');
        blueOrb.classList.remove('blue');
        blueOrb.classList.add('red-all');
        greenOrb.classList.remove('green');
        greenOrb.classList.add('red-all');
        yellowOrb.classList.remove('yellow');
        yellowOrb.classList.add('red-all');
    } 
    else if(sequence.length === position) {
        startButton.innerHTML = 'NEXT LEVEL';
        count++; 
        tracking = false;
        nameBar.classList.add('hideMessages');
        levelBar.classList.add('hideMessages');
        winMessage.innerHTML = 'Level ' + (count - 1) + ' Completed!';
        startButton.classList.remove('opacity');
        startButton.classList.add('addOpacity');
        levelBar.innerHTML = 'level: ' + (count);
    }
}

function setLevel(count) {
    const user = api.getUser();
    user.level = count;
    api.updateAll(user);
}

export default count;