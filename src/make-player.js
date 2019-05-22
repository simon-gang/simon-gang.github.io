function makePlayer(formData) {
    const player = {
        name: formData.get('playerName'),
        scheme: formData.get('scheme'),
        // set initial level
        level: 1
    };
    return player;
}

export default makePlayer;