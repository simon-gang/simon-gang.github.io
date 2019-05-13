import playSequence from '../index.js';

const api = {

    storage: localStorage,

    getSequence() {
        return playSequence;
    }
    // saveSequence(sequence) {
    //     const json = JSON.stringify(sequence);
    //     api.storage.setItem('sequence', json);
    // },

    // getSequence() {
    //     const json = api.storage.getItem('sequence');
    //     if(!json) return null;
    //     const sequence = JSON.parse(json);
    //     return sequence;
    // }
};

export default api;