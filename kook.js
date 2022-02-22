function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible
const deck = document.querySelector("#deck");
const stars = document.querySelectorAll("#heart li");
console.log(stars)
const moves = document.querySelector("#moves");
const timer = document.querySelector("#timer");
const restart = document.querySelector("#restart");
const cards = document.querySelectorAll("#deck li");
let arr = Array.from(cards)
let openCards = [];
let movesCounter = 0;
let timeOut = true;
let match = 0;
let time = 0;
let timeId = 0;

//functions



// event listeners