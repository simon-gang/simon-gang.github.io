import turnAllOff from './turn-all-off.js';

// declaring global variables and referencing DOM elements
const startButton = document.getElementById('start-button');
const lights = document.querySelectorAll('.light');
const orbsContainer = document.getElementById('orbs')
let count = 2;
let currentSequence;
let playCount = 0;

//generates the computer array of numbers
function genSequence() {
    const sequence = [];
    for(let i = 0; i < count; i++) {
        console.log('looping over index of' + i + ' count is ' + count);
        sequence.push(Math.floor(Math.random() * 4));
    }
    // find if we can just return currentSequence
    currentSequence = sequence;
    console.log(currentSequence, 'generated sequesnce');
    return currentSequence;
}

//this is making the lights light up depending on their position in the array
function playSequence(sequence) {
    console.log('play sequence ', sequence);
    
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
                
            }, 300);
        }
    }, 1050);
}

//starts the play function
startButton.addEventListener('click', () => {
    const sequence = genSequence();
    console.log('The sequence in the start button' + sequence);
    orbsContainer.classList.remove('disable');
    // count++; 
    playSequence(sequence);
});

//tracks the clicks of the user
function trackClicks(sequence) {
    console.log(sequence, 'tracking user clicks');

    let position = 0;

    for(let i = 0; i < lights.length; i++) {
        const currentElement = lights[i];
        currentElement.addEventListener('click', (event) => {
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
}

function compare(correct, guess) {
    playCount++;
    if(correct !== guess) {
        donePlaying();
    } 
    else if(currentSequence.length === playCount) {
        orbsContainer.classList.add('disable');
        startButton.innerHTML = 'Next Level';
        count++; 
    }
}

function donePlaying() {
    window.alert('Incorrect! Restart your game.')
    count = 2;
}

export default playSequence;
