import api from './services/api.js';
import turnAllOff from './turn-all-off.js';
import loadProfile from './services/load-profile.js';
import { loseSounds, winSound, startChime, clickSound } from './audio.js';

// declaring global variables and referencing DOM elements
const startButton = document.getElementById('start-button');
const hallButton = document.getElementById('hall-button');
const lights = document.querySelectorAll('.light');
const winMessage = document.getElementById('win');
const nameBar = document.getElementById('name');
const levelBar = document.getElementById('level');
const orbOne = document.getElementById('orb-one');
const orbTwo = document.getElementById('orb-two');
const orbThree = document.getElementById('orb-three');
const orbFour = document.getElementById('orb-four');

let count = 1;
let sequence;
let tracking = false;
let position = 0;

// udpates color scheme of orbs
const mono = document.getElementById('mono');
const analogous = document.getElementById('analogous');
const user = api.getUser();

mono.href = './src/' + user.scheme + '.css';
analogous.href = './src/' + user.scheme + '.css';

loadProfile();

//generates the computer array of numbers
function genSequence() {
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
                clickSound();
                
                i++;
                
            }, 300);
        }
    }, 850);
}

//starts the play function
startButton.addEventListener('click', () => {
    genSequence();
    playSequence();
    startChime();
    position = 0;
    winMessage.innerHTML = '';
    startButton.classList.add('opacity');
    // removes hidden visibility from name and level 
    nameBar.classList.remove('hideMessages');
    levelBar.classList.remove('hideMessages');
    // hides PLAY AGAIN and HALL nav button when player PLAYS AGAIN
    startButton.classList.remove('addOpacity');
    hallButton.classList.add('opacity');
    hallButton.classList.remove('addOpacity');
    // removing red background when player selects PLAY AGAIN
    orbOne.classList.remove('red-all');
    orbTwo.classList.remove('red-all');
    orbThree.classList.remove('red-all');
    orbFour.classList.remove('red-all');
    // adding scheme color when player selects PLAY AGAIN
    orbOne.classList.add('orb-one');
    orbTwo.classList.add('orb-two');
    orbThree.classList.add('orb-three');
    orbFour.classList.add('orb-four');
});

//triggers the light on the referenced orbs
for(let i = 0; i < lights.length; i++) {
    const currentElement = lights[i];
    currentElement.addEventListener('click', () => {
        clickSound();
    
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
        loseSounds();
        count = 1;
        tracking = false;
        // PLAY AGAIN nav button appears
        startButton.innerHTML = 'PLAY AGAIN?';
        startButton.classList.remove('opacity');
        startButton.classList.add('addOpacity');
        // Hides name and level to display losing message
        nameBar.classList.add('hideMessages');
        levelBar.classList.add('hideMessages');
        winMessage.innerHTML = 'EEK! YOU LOSE!';
        // Hall nav button appears
        hallButton.classList.remove('opacity');
        hallButton.classList.add('addOpacity');
        // set level to 1
        levelBar.innerHTML = 'level: 1';
        // Adds red background to all orbs
        orbOne.classList.add('red-all');
        orbTwo.classList.add('red-all');
        orbThree.classList.add('red-all');
        orbFour.classList.add('red-all');
       
    } 
    else if(sequence.length === position) {
        winSound();
        startButton.innerHTML = 'NEXT LEVEL';
        count++; 
        tracking = false;
        // Hides name and level to diplay win message
        nameBar.classList.add('hideMessages');
        levelBar.classList.add('hideMessages');
        winMessage.innerHTML = 'Level ' + (count - 1) + ' Completed!';
        // NEXT LEVEL button appears
        startButton.classList.remove('opacity');
        startButton.classList.add('addOpacity');
        // level is updated based on count
        levelBar.innerHTML = 'level: ' + (count);
    }
}

function setLevel(count) {
    const user = api.getUser();
    user.level = count;
    api.updateAll(user);
}

export default count;