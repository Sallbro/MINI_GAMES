counter = 0;
function jump(){
var character = document.getElementById("character");
var block = document.getElementById("block");
character.classList.add("animate");

setTimeout(function(){
character.classList.remove("animate");
counter++;
},250);
};
   
var checkdead = setInterval(function(){
    var charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(charactertop>=426 && blockleft<24 && blockleft>0){
        block.style.animation = "none";
        block.style.display = "none";
        character.style.background = "yellow";
        character.style.animation = "none";
        alert("you lose.score:" + counter);
    }
    },10);