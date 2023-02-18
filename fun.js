var button = document.querySelector('button') ;
var box = document.getElementById('changeMe') ;
var sum = document.getElementById('demo') ;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.onclick = function changeColour(){
    let colours = ['red', "green", "blue", "pink", "purple"]
    let i = getRandomInt(0, 4);
    box.style.background = colours[i] ;
}