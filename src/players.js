import api from './services/api.js';
import makePlayerRow from './make-player-row.js';

const tbody = document.getElementById('players');
const allPlayers = api.getAll();

for(let i = 0; i < allPlayers.length; i++) {
    const players = allPlayers[i];
    const tr = makePlayerRow(players);

    tbody.appendChild(tr);
}