function makePlayer(formData) {
    const player = {
        name: formData.get('playerName'),
        scheme: formData.get('scheme')
    };
    return player;
}

export default makePlayer;