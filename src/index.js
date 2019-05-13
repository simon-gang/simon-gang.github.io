const startButton = document.getElementById('start-button');
const lights = document.querySelectorAll('.light');


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

            }, 300);
        }
    }, 1250);
}

function turnAllOff() {
    for(let i = 0; i < lights.length; i++) {
        const light = lights[i];
        light.classList.remove('on');
    }
}

function donePlaying() {
  //  console.log('You played the game!');
}

startButton.addEventListener('click', () => {
    const sequence = [];

    for(let i = 0; i < 5; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }

  //  console.log('starting sequence', sequence);
    startButton.disabled = true;

    playSequence(sequence);
});