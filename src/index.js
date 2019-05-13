// import api from './services/api.js';

const startButton = document.getElementById('start-button');
const lights = document.querySelectorAll('.light');
let count = 2;
let currentSequence;

function genSequence() {
    const sequence = [];
    for(let i = 0; i < count; i++) {
        sequence.push(Math.floor(Math.random() * 4));
    }
    currentSequence = sequence;
    return currentSequence;
}

function playSequence(sequence) {
    
    let i = 0;
    
    const interval = setInterval(() => {
        turnAllOff();
        
        if(i === sequence.length) {
            clearInterval(interval);
            donePlaying();
        }
        else {
            setTimeout(() => {
                const indexToPlay = sequence[i];
                const lightToPlay = lights[indexToPlay];
                lightToPlay.classList.add('on');
                
                i++;
                
            }, 500);
        }
    }, 1250);
}

startButton.addEventListener('click', () => {
    const sequence = genSequence();
    count++;

    playSequence(sequence);
});

function turnAllOff() {
    for(let i = 0; i < lights.length; i++) {
        const light = lights[i];
        light.classList.remove('on');
    }
}

function donePlaying() {
  //  console.log('You played the game!');
}


export default playSequence;
