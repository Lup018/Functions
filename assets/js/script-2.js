let ele1 = document.getElementById('ele1');
let color = 'green'
ele1.addEventListener('click', function(){pintar(ele1, color);})
function pintar(elemento, color) {
    elemento.style.backgroundColor = color
}
