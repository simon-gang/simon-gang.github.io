
import turnAllOff from './turn-all-off.js';

const startButton = document.getElementById('start-button');
const lights = document.querySelectorAll('.light');
let count = 3;
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
            trackClicks(sequence);
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
    console.log(sequence);
});

function trackClicks(sequence) {

    let position = 0;

    for(let i = 0; i < lights.length; i++) {
        const currentElement = lights[i];
        currentElement.addEventListener('click', (event) => {
            currentElement.classList.add('on');
            setTimeout(() => {
                currentElement.classList.remove('on');
                const correct = sequence[position];
                const guess = i;
                console.log(correct, guess);
                position++;
            }, 500); 
        });
    }
}



export default playSequence;
