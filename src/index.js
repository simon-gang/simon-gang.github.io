import api from './services/api.js';
import makePlayer from './make-player.js';

const playerForm = document.getElementById('username');

playerForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(playerForm);
    console.log(formData);
    const player = makePlayer(formData);
    // console.log(formData.get('playerName'));
    api.saveUser(player);


    window.location = '../game-page.html';

});