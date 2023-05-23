const masterDiv = document.querySelector('#master-grid');
const btn = document.querySelector(".btn");
let gridInput = 16;


function makeGrid(x) {
    let gridSize = x * x -1;
    masterDiv.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    masterDiv.style.gridTemplateRows = `repeat(${x}, 1fr)`

    for (i = 0; i <= gridSize; ++i) {
        let gridDiv = document.createElement('div');
        gridDiv.className = 'gridDivs';
        masterDiv.appendChild(gridDiv);
        gridDiv.addEventListener('mouseover', function(e) {
            this.style.backgroundColor = 'black';
        });      
    }
}

function clearGrid(x){
    masterDiv.innerHTML = ('');
}

    btn.addEventListener('click', function() {
        clearGrid(gridInput);
        gridInput = prompt('Select new resolution within 1 - 64', '');
        if (gridInput > 64 || gridInput < 1) {
            alert('Out of range');
            return;
        }
        makeGrid(gridInput)
    });

    makeGrid(gridInput);