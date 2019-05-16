
const api = {
    storage: localStorage,

    saveUser(player){
        const json = JSON.stringify(player);
        api.storage.setItem('player', json);
        // const players = api.getAll();
        // players[0] = player;
    },
    getUser() {
        const json = api.storage.getItem('player');
        if(!json) return null;
        const player = JSON.parse(json);
        return player;
    }

   
};

export default api;