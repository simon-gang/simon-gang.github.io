import turnAllOff from './turn-all-off.js';
import loadProfile from './services/load-profile.js';

// declaring global variables and referencing DOM elements
const startButton = document.getElementById('start-button');
const lights = document.querySelectorAll('.light');
const winMessage = document.getElementById('win');
// const loseMessage = document.getElementById('lose');
const nameBar = document.getElementById('name');
const levelBar = document.getElementById('level');

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
    position = 0;
    winMessage.innerHTML = '';
    startButton.classList.add('opacity');
    nameBar.classList.remove('hideMessages');
    levelBar.classList.remove('hideMessages');
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
        }, 500); 
    });
}

function compare(correct, guess) {
    if(correct !== guess) {
        count = 1;
        tracking = false;
        startButton.innerHTML = 'PLAY AGAIN?';
        startButton.classList.remove('opacity');
        // loseMessage.innerHTML = 'EEK! YOU LOSE!';

    } 
    else if(sequence.length === position) {
        startButton.innerHTML = 'NEXT LEVEL';
        count++; 
        tracking = false;
        nameBar.classList.add('hideMessages');
        levelBar.classList.add('hideMessages');
        winMessage.innerHTML = 'Level ' + (count - 1) + ' Completed!';
        startButton.classList.remove('opacity');
    }
}

export default count;