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
var flg = true;
var arr= [];

for(let i=0; i<allDivs.length; i++){
    allDivs[i].addEventListener('click', function() {
        if(flg){
            this.firstChild.style.opacity = '1';
            if(arr.length == 0){
                arr[0] =this;
            }
            else if(arr.length == 1){
                arr[1] = this;
            }
            if(arr.length == 2){
                flg =false;
            }
        }
        else{
            return;
        }
        
    })
}

//functions

function chak(){
    if (arr[0].firstChild.getAttribute('card') == arr[1].firstChild.getAttribute('card'))
    alert('ok')
else{
    arr[0].firstChild.style.opacity =0;
    arr[1].firstChild.style.opacity =1;
    
}
arr =[];
flg= true;}

// event listeners