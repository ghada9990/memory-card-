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
//event
deck.addEventListener("click",function(event){
    if(ValidClick(event.target)){
        if(timeOut){
            initTime();
        }
        toggleCard(event.target);
        pushCard(event.target);
        if(openCards.length ==2){
            checkMatch();
            addMove();
            if(movesCounter==8 || movesCounter==16){
                removeStars();
            }
        }
    }
}
)
restart.addEventListener("click",resetGame);
//functions
function ValidClick(card){
    if (card.classList.contains("card") &&!card.classList.contains("match") &&!openCards.includes(card)&&openCards.length <2){
        return true
    }
    else{
        return false
    }
}
//-----------------
function initTime(){
    timeOut = false;
    timeId = setInterval(() => {
        timerCount();

    }, 1000);
    }
    //==============================================
function timerCount(){

    let min = Math.floor(time/60);
    let sec = time%60;
    time++;
    if(sec <10){
        timer.innerHTML=`${min}:0${sec}`
    }
    else {
        timer.innerHTML=`${min}:${sec}`
    }

}
    // ======================================
  function stopTimer(){
    timeOut = true;
    clearInterval(timeId);
    time=0;
    timerCount();

}
    // ======================================

 function toggleCard(card){
     card.classList.toggle("open");
 }
 function pushCard(card){
     openCards.push(card);
 }
 function checkMatch(){
     console.log(openCards[0].children, "card1");
     if(openCards[0].children[0].className === openCards[1].children[0].className){
         openCards[0].classList.add("match");
         openCards[1].classList.add("match");
         openCards =[];
         match++;
         if(match==8){
             setTimeout(() =>{
                 win()
             }, 1000);
         }
     }
     else{
         setTimeout( () => {
             toggleCard(openCards[0]);
             toggleCard(openCards[1]);
             //or
            //  openCards[0].classList.remove (“open”)
            //  openCards[1].classList.remove (“open”)
openCards= [];
         },1000)
     }
 }
 function win(){
     alert('win')
     resetGame()
 }
 function addMove(){
     movesCounter++;
     moves.innerHTML =movesCounter;
 }
 function removeStars(){
     for(let star of stars){
         if(star.style.display != "none"){
             star.style.display ="none";
             break;
         }
     }
 }
 function resetGame(){
     stopTimer()
     resetMove();
     //removeStars()
     resetStars()
     resetMatch()
     reShuffle()
     match=0;
     openCards=[];
 }
 function resetMove(){
     movesCounter= 0;
     moves.innerHTML =0;
 }
 function resetStars(){
     for(let star of stars){
         if(star.style.display=="none"){
             star.style.display="inline"
         }
     }
 }
 function resetMatch(){
     for(let itme of cards){
         itme.classList.remove("match","open")
     }
 }
 reShuffle()
 function reShuffle(){
     let shuffled = shuffle(arr);
     for(let item of shuffled){
         deck.appendChild(item);
     }
 }