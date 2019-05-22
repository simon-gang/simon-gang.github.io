function makePlayerRow(player) {
    const tr = document.createElement('tr');

    const nameCell = makeCell(player.name);
    tr.appendChild(nameCell);
    
    const schemeCell = makeCell(player.scheme);
    tr.appendChild(schemeCell);

    const levelCell = makeCell(player.level);
    tr.appendChild(levelCell);
    
    return tr;
}

function makeCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

export default makePlayerRow;