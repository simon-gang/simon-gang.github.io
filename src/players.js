import api from './services/api.js';
import { makePlayerRow } from './make-player-row.js';

const tbody = document.getElementById('players');
const allPlayers = api.getAll();
const sorted = allPlayers.sort((a, b) => b.level - a.level);
for(let i = 0; i < sorted.length; i++) {
    const player = sorted[i];
    const tr = makePlayerRow(player);

    tbody.appendChild(tr);
}