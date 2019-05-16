import api from './api.js';

function loadProfile() {
    const playerName = document.getElementById('name');

    const user = api.getUser();

    playerName.textContent = 'player: ' + user.name;
}
export default loadProfile;