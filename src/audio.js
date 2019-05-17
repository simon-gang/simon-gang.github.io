const chime = new Audio('./assets/chime.wav');
const thunder = new Audio('./assets/thunder.wav');
const gritty = new Audio('./assets/gritty.wav');
const lowBoom = new Audio('./assets/lowBoom.wav');
const lowDrum = new Audio('./assets/lowDrum.wav');
const spell = new Audio('./assets/spell.wav');
const click = new Audio('./assets/click.wav');
click.volume = .1;
thunder.volume = .3;
gritty.volume = .1;
spell.volume = .2;
chime.volume = .2;


function startChime() {
    chime.play();
}

function loseSounds() {
    lowBoom.play();
    lowDrum.play();
    thunder.play(); 
    gritty.play();
}

function winSound() {
    spell.play();
}

function clickSound() {
    click.play();
}

export {
    startChime,
    loseSounds,
    winSound,
    clickSound
};