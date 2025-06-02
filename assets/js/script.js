document.addEventListener('DOMContentLoaded',function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener('click', function(){
            console.log((this.getAttribute('data-type')));
            if(this.getAttribute('data-type') ==='submit'){
                
            }else{
                let gametype =this.getAttribute('data-type');
                alert(gametype);
            }
        });
    }
})

function runGame(){

}
function checkAnswer(){

}
function calculateAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaysubtractionQuestion(){

}
function displayMultiplyQuestion(){

}