document.addEventListener('DOMContentLoaded',function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener('click', function(){
            console.log((this.getAttribute('data-type')));
            if(this.getAttribute('data-type') ==='submit'){
                
            }else{
                let gametype =this.getAttribute('data-type');
            runGame(gametype);

            }
        });
    }
    runGame('addition');
})

function runGame(gametype){

    let num1 =Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1
        if(gametype == 'addition'){
        
            checkAnswer();

        }else{
            alert(`unknown gametype${gametype}`);
            throw `unknown gametype ${gametype}. Aborting!`;    
        }
}
function checkAnswer(){
    let useranswer = parseInt(document.getElementById('answer-box').value)
    let calculateAnswer = calculateAnswer();
    let isCorrect = useranswer === calculateAnswer[0];

    if(isCorrect){
        alert('hurray you got it right');
    }else{
        alert(`Awww  your answer ${useranswer}. The Correct Answer was ${calculateAnswer}`)
    }
    runGame(calculateAnswer[1]);
}
function calculateAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand1').innerText);
    let operator = document.getElementById('operand1').innerText;
    if(operator === '+'){
        return [operand1 +operand2,'addition']
    }else{
        alert(`unimplemnted operator ${operator}`);
        throw `unimplemnted operator ${operator}. Aborting!`
    }

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(oprand1,oprand2){
    document.getElementById('operand1').textContent = oprand1;
    document.getElementById('operand2').textContent = oprand2;
    document.getElementById('operator').textContent = '+';
    

}
function displaysubtractionQuestion(){

}
function displayMultiplyQuestion(){

}