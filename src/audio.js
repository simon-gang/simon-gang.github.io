const x = document.getElementById('myAudio'); 
const orbAudio = document.getElementById('orbAudio');

function playAudio() { 
    x.play(); 
} 

function playOrbs() {
    orbAudio.play();
}
export {
    playAudio,
    playOrbs
};