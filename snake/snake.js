const board=document.getElementById("mysnakegame");
const context=board.getContext("2d");
const myscore=document.getElementById("btn");
let dx=10;
let dy=0;
let foodx=0;
let foody=0;
let scores=0;

let snake=[{x:200,y:300},
           {x:190,y:300},
           {x:180,y:300},
           {x:170,y:300},
           {x:160,y:300}
          ];


// main();
foodgen();
document.addEventListener("keydown",changedirection);

function main(){
    myscore.style.display="none";
    if(gameend()){
    alert("game over"+" your score is: "+scores);
    location.reload();
    return;
    }
setTimeout(function ontick(){
    clearboard();
    drawfood();
    drawsnake();
    movesnake();
    
    main();
},100);
}
function clearboard(){
    context.fillStyle="#41424C";
    context.strokestyle="#41424C";
    context.fillRect(0,0,board.width,board.height);
    context.strokeRect(0,0,board.width,board.height);
}
function drawsnake(){
    snake.forEach(drawsnakepart);
}

function drawsnakepart(snakepart){
    context.fillStyle="green";
    context.strokestyle="green";
    context.fillRect(snakepart.x,snakepart.y,10,10);
    context.strokeRect(snakepart.x,snakepart.y,10,10);
}
function movesnake(){
let head={x:snake[0].x+dx,y:snake[0].y+dy};
snake.unshift(head);
if(snake[0].x==foodx && snake[0].y==foody){
    scores++;
    document.getElementById("score").innerHTML="score: "+scores;
    foodgen();
}
else{
snake.pop();
}
}
function changedirection(event){
const myleft=37;
const myup=38;
const myright=39;
const mydown=40;

const keypress=event.keyCode;
const goingdown=dy===10;
const goingup=dy===-10;
const goingright=dx===10;
const goingleft=dx===-10;

if(keypress===myleft && !goingright){
    dx=-10;
    dy=0;

}
if(keypress===myright && !goingleft){
    dx=10;
    dy=0;
}
if(keypress===myup && !goingdown){
    dy=-10;
    dx=0;
}
if(keypress===mydown && !goingup){
    dy=10;
    dx=0;
}
}

function gameend(){
    for(let i=4;i<snake.length;i++){
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true;
        }
    }
    if(snake[0].x>board.width || snake[0].x<0 || snake[0].y<0 || snake[0].y>board.height){
        return true;
    }
}
function randomfood(min,max){
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
    
}

function foodgen(){
    foodx=randomfood(0,board.width-10);
    foody=randomfood(0,board.height-10);
    snake.forEach(function eatenfood(part){
    if(part.x===foodx && part.y===foody){
    foodgen();
    }
    });
}
function drawfood(){
    context.fillStyle = "red";
    context.strokestyle = "black";
    context.fillRect(foodx, foody, 10, 10);
    context.strokeRect(foodx, foody, 10, 10);
}