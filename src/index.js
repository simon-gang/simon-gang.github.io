import turnAllOff from './turn-all-off.js';

// declaring global variables and referencing DOM elements
const startButton = document.getElementById('start-button');
const lights = document.querySelectorAll('.light');
const orbsContainer = document.getElementById('orbs')
let count = 2;
let sequence;
let tracking =  false;

//generates the computer array of numbers
function genSequence() {
    sequence = [];
    for(let i = 0; i < count; i++) {
        console.log('looping over index of' + i + ' count is ' + count);
        sequence.push(Math.floor(Math.random() * 4));
    }
}

//this is making the lights light up depending on their position in the array
function playSequence() {
    console.log('play sequence ', sequence);
    
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

let position = 0;
//starts the play function
startButton.addEventListener('click', () => {
    genSequence();
    orbsContainer.classList.remove('disable');
    playSequence();
    position = 0;
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
            const correct = sequence[position]; //use currentSequence here instead of sequence and maybe everywhere else, too.
            const guess = i;
            console.log('comparing correct ' + correct + ' and user click ' + guess);
            position++;
            console.log('position is at ' + position)
            compare(correct, guess);
        }, 500); 
    });
}

function compare(correct, guess) {
    console.log(correct, guess, 'inside compare');
    if(correct !== guess) {
        count = 2;
        tracking = false;
    } 
    else if(sequence.length === position) {
        orbsContainer.classList.add('disable');
        startButton.innerHTML = 'Next Level';
        count++; 
        tracking = false;
    }
}

export default playSequence;
