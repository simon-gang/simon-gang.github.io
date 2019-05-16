function makePlayerRow(player) {
    const tr = document.createElement('tr');

    const nameCell = makeNameCell(player.name);
    tr.appendChild(nameCell);
    
    return tr;
}

function makeNameCell(text) {
    const cell = document.createElement('td');
    cell.textContent = text;
    return cell;
}

export default makePlayerRow; 