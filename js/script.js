const character = document.getElementById('character');
const block = document.getElementById('block');
const game = document.getElementById('game')

function jump(){
    if(character.classList == 'animate'){
        return
    }else{
    character.classList.add('animate') //add class to character
        setTimeout(removeJump, 400); //remove class after action performed
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
var elBlock2 = document.getElementById('block2');
var animationBlock2Speed = elBlock2.style.animationDuration = Block2speed+'s';
var bgBlock2Color = elBlock2.style.backgroundColor = 'rgb('+ [Block2color].join(',') + ')';

game.addEventListener('click', jump, false);

// collision

function collision(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue('left'));

    if(!(characterTop + 70 < 376 || 
        characterTop + 70 < 366 ||
        (blockLeft || block2Left )> 370 + 30
        )
      ) {
        return true
        }
}

