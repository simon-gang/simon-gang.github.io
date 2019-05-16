// import api from './services/api.js';

function makePlayer(formData) {
    const player = {
        name: formData.get('playerName')

    };
    console.log(player);
    return player;
}

export default makePlayer;