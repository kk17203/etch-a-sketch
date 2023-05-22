const container = document.querySelector('#container');

grid(256);

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
            gridBox.style.backgroundColor = 'red';
        })
        container.appendChild(gridBox);
    }
}
