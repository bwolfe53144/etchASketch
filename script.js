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
    let newColor = document.querySelectorAll(".box");
    for (const color of newColor) {
        color.addEventListener("mouseover", () => {
        color.style.backgroundColor = "black";
        });
    }
}

let boxNumber = 16;
createBoxes(boxNumber);

function clearScreen() {
    document.querySelectorAll('.box').forEach(e => e.remove());
    document.querySelectorAll('.boxRow').forEach(e => e.remove());
    createBoxes(boxNumber);
}


function changeNumber() {
    boxNumber = parseInt(prompt("Input a number between 2-100"));
    if (101 > boxNumber && boxNumber > 1) {
        clearScreen();
    }
}



