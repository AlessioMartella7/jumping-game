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

var block2 = new Block(4,[100,25,25])
console.log(block2)

var Block2speed = block2.speed;
var Block2color = block2.color

var elBlock2 = document.getElementById('block-2');
console.log(elBlock2)

var animationBlock2Speed = elBlock2.style.animationDuration = Block2speed;
console.log(animationBlock2Speed)

var bgBlock2Color = elBlock2.style.backgroundColor = 'rgb('+ [Block2color].join(';') + ')';
console.log(bgBlock2Color)

game.addEventListener('click', jump, false);


// Esercitazioni varie JS

/* var hotel = {
    name: 'Overlock',
    rooms: 33,
    bathrooms: 2,
}

console.log('hotel', hotel);

const home = {...hotel};
delete home.bathrooms;

console.log('home', home);

function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvalaibility = function(){
        return this.rooms - this.booked;
    };
}

var duroHotel = new Hotel('duro',44,10);
var moscioHotel = new Hotel('moscio',22,10);

console.log('duro', duroHotel);
console.log('duro disponibilit1a', duroHotel.checkAvalaibility());

console.log('moscio', moscioHotel);

function windowSize(){
    var height ='height:' + this.innerHeight;
    var width  ='width: ' + this.innerWidth;
    return [height,width];
}

console.log(windowSize())
console.log('thisHotelBathrooms:', this.hotel.bathrooms)

console.log(window.location)
console.log(document.URL)

 */

