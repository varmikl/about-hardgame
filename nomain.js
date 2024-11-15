const colchange = document.getElementById('colchange');

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#A633FF"]; 
let colorIndex = 0; 

function changeColor() {
    colchange.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        changeColor();
    }
});
