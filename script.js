




function createBoxes(num) {
    const container = document.getElementById('container');
    for (let i = 0; i < num; i++) {
        const boxRow = document.createElement('div');
        boxRow.className = 'boxRow';
        container.appendChild(boxRow);
        for (let i = 0; i < num; i++) {
            const box = document.createElement('div');
            box.className = 'box';
            boxRow.appendChild(box);
        }
    }
}

createBoxes(10);