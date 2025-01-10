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
var elBlock2 = document.getElementById('block-2');
var animationBlock2Speed = elBlock2.style.animationDuration = Block2speed+'s';
var bgBlock2Color = elBlock2.style.backgroundColor = 'rgb('+ [Block2color].join(';') + ')';

game.addEventListener('click', jump, false);



