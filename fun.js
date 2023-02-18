var button = document.querySelector('button') ;
var box = document.getElementById('changeMe') ;
var sum = document.getElementById('demo') ;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.onclick = function changeColour(){
    let colours = ['red', "green", "blue"]
    let i = getRandomInt(0, 2);
    box.style.background = colours[i] ;
}