import turnAllOff from './turn-all-off.js';
import loadProfile from './services/load-profile.js';

// declaring global variables and referencing DOM elements
const startButton = document.getElementById('start-button');
const lights = document.querySelectorAll('.light');
const winMessage = document.getElementById('win');

let count = 2;
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
    }, 1050);
}

//starts the play function
startButton.addEventListener('click', () => {
    genSequence();
    playSequence();
    position = 0;
    winMessage.innerHTML = '';
    startButton.classList.add('opacity');
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
        count = 2;
        tracking = false;
        startButton.innerHTML = 'PLAY AGAIN?';
        startButton.classList.remove('opacity');

    } 
    else if(sequence.length === position) {
        startButton.innerHTML = 'NEXT LEVEL';
        count++; 
        tracking = false;
        winMessage.innerHTML = 'Congrats! ' + 'Level: ' + (count - 2);
        startButton.classList.remove('opacity');
    }
}

export default count;