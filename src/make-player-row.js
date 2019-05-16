function makePlayerRow(player) {
    const tr = document.createElement('tr');

    const nameCell = makeNameCell(player.name);
    tr.appendChild(nameCell);
    
    const schemeCell = makeSchemeCell(player.scheme);
    tr.appendChild(schemeCell);
    
    return tr;
}

function makeNameCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

function makeSchemeCell(scheme) {
    const schemeCell = document.createElement('td');
    schemeCell.textContent = scheme;
    return schemeCell;
}

export default makePlayerRow; 