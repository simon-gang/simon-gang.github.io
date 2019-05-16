
const api = {
    storage: localStorage,

    saveUser(player){
        console.log(player);
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





    
    // },
    // saveNewUser(user){
    //     const players = api.getAll();
    //     players.unshift(user);
    //     const json = JSON.stringify(players);
    //     api.storage.setItem(api.key, json);
    // },
    // getUser(){
    //     const players = api.getAll();
    //     return players[0];
    // },
    // getAll() {
    //     const json = localStorage.getItem(api.key);
    //     let players = JSON.parse(json);
    //     if(!players) {
    //         players = [];
    //     }
    //     return players;
    // },
   
};

export default api;