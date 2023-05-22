const container = document.querySelector('#container');
const btn = document.querySelector(".btn");
let defaultGridSize = ("256");
let gridSize = parseInt(defaultGridSize);


grid(gridSize);
newGrid();

function grid(num) {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const boxSize = Math.floor(containerWidth/Math.sqrt(num));
    for (r = 0; r < num; r++) {
        let gridBox = document.createElement('div');
        gridBox.classList.add('gridBox');
        gridBox.style.width = boxSize + 'px';
        gridBox.style.height = boxSize + 'px';
        gridBox.addEventListener("mouseover", function(event) {
            gridBox.style.backgroundColor = 'yellow';
        })
        
        container.appendChild(gridBox);
    }
}

function newGrid() {
    btn.addEventListener('click', function(e) {
        let gridBoxes = document.querySelectorAll('.gridBox');
        gridBoxes.forEach(function(box) {
            container.removeChild(box);
            });
        userInput = prompt('Set grid size', '');
        gridSize = parseInt(userInput);
        let gridSizeSquared = Math.pow(gridSize, 2);
        grid(gridSizeSquared);
        console.log(gridSize);
        console.log(gridSizeSquared);
    });
}

function sum (x, x) {

}
//error happens if larger than 1,024 boxes.