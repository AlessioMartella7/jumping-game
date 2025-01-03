const character = document.getElementById('character');
const block = document.getElementById('block');

document.addEventListener('click', jump);
    function jump(){
        if(character.classList == 'animate'){return}
        character.classList.add('animate') //add class to character
            setTimeout(removeJump, 300); //remove class after action performed
    }
    function removeJump(){
        character.classList.remove('animate');
    }