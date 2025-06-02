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
    let num1 =Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1

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