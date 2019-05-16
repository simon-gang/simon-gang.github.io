// import api from './services/api.js';

function makePlayer(formData) {
    const player = {
        name: formData.get('playerName'),
        scheme: formData.get('scheme')
    };
    console.log(player);
    return player;
}

export default makePlayer;