
const api = {
    storage: localStorage,

    saveUser(player){
        const json = JSON.stringify(player);
        api.storage.setItem('player', json);
        const allPlayers = api.getAll();

        console.log(allPlayers);
        allPlayers.push(player);
        const allPlayersJson = JSON.stringify(allPlayers);
        api.storage.setItem('allPlayers', allPlayersJson);
    },
    getUser() {
        const json = api.storage.getItem('player');
        if(!json) return null;
        const player = JSON.parse(json);
        return player;
    },
    getAll() {
        const json = api.storage.getItem('allPlayers');
        let allPlayers = JSON.parse(json);
        if(!allPlayers) {
            allPlayers = [];
        }
        return allPlayers;
    }
};


export default api;