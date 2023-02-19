var button = document.querySelector('button') ;
var box = document.getElementById('changeMe') ;
var sum = document.getElementById('demo').innerHTML ;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

button.onclick = function changeColour(){
    let colours = ['red', "green", "blue", "pink", "purple", "yellow"]
    let i = getRandomInt(0, 5)
    box.style.background = colours[i] 

    let cons = parseInt(sum) 
    
    let newval = cons*2
    sum = newval
    document.getElementById('demo').innerHTML = sum

    
    
    
}