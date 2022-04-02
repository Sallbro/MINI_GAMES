function moveleft(){

    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left = left - 100;
	if(left>=0){
    character.style.left = left + "px";}
}
function moveright(){
    
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left = left + 100;
	if(left<300){
    character.style.left = left + "px";}
}
document.addEventListener("keydown", event =>{
    if(event.key==="ArrowLeft"){moveleft();}
    if(event.key==="ArrowRight"){moveright();}
});
var counter = 0;
var block = document.getElementById("block");
block.addEventListener("animationiteration", () =>{
var random = Math.floor(Math.random()*3);
left = random*100;
block.style.left = left + "px";
counter++;
});
setInterval(function(){
	var block = document.getElementById("block");
	var characterleft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
	var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var blocktop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
	if(characterleft==blockleft && blocktop>200 && blocktop<=400 ){		
		block.style.animation = "none";
		block.style.display = "none";
		alert("u lose.score:" +counter);
		location.reload();
	}
},10);