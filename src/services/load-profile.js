import api from './api.js';

function loadProfile() {
    const playerName = document.getElementById('name');

    const user = api.getUser();

    if(!user) {
       // window.location = './';
    }
    console.log(user);
    console.log(playerName.textContent);
    playerName.textContent = 'player: ' + user.name;
    console.log(playerName.textContent);
}
export default loadProfile;