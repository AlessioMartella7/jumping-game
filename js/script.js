const character = document.getElementById('character');
const block = document.getElementById('block');
const game = document.getElementById('game')
let gameOver = false;

function jump(){
    if(character.classList == 'animate'){
        return
    }else{
    character.classList.add('animate') //add class to character
        setTimeout(removeJump, 500); //remove class after action performed
    }
}

function removeJump(){
    character.classList.remove('animate');
}


function Block(speed , color){
this.speed = speed;
this.color = color;
}

var block2 = new Block(3.5,[220,39,221])
var Block2speed = block2.speed;
var Block2color = block2.color
var elBlock2 = document.getElementById('block-2');
var animationBlock2Speed = elBlock2.style.animationDuration = Block2speed+'s';
var bgBlock2Color = elBlock2.style.backgroundColor = 'rgb('+ [Block2color].join(',') + ')';

game.addEventListener('click', jump, false);

// collision

function collision(){
   let blockCoord = block.getBoundingClientRect();
   let characterCoord = character.getBoundingClientRect();
   let elBlock2Coord = elBlock2.getBoundingClientRect();
  if(
    (characterCoord.x < elBlock2Coord.x + elBlock2Coord.width &&
    characterCoord.x + characterCoord.width > elBlock2Coord.x &&
    characterCoord.y < elBlock2Coord.y + elBlock2Coord.height &&
    characterCoord.y + characterCoord.height > elBlock2Coord.y ) ||

    (characterCoord.x < blockCoord.x + blockCoord.width &&
    characterCoord.x + characterCoord.width > blockCoord.x &&
    characterCoord.y < blockCoord.y + blockCoord.height &&
    characterCoord.y + characterCoord.height > blockCoord.y)
  )
       {
        gameOver = true;
        return gameOver
        }
}

function deathStatus(){
    if(gameOver){
        game.style.background = 'black';
        game.innerText = 'GAME OVER';
    }
}

function gameLoop() {
    if (!gameOver) {
        collision();  // controlla la collisione in ogni frame
        deathStatus();  // aggiorna lo stato del gioco
        requestAnimationFrame(gameLoop); // continua il ciclo del gioco
    }
}

gameLoop();



