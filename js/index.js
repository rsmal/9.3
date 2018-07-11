
var gameMessage = document.getElementById('game__message');
var playerScore=0;
var playerScoreOutput = document.getElementById('playerScore');
var ComputerScore=0;
var ComputerScoreOutput = document.getElementById('ComputerScore');
var roundCounter=0;
var roundCounterOutput = document.getElementById('roundCounter');
var setRounds=100;


document.getElementById("rock").addEventListener("click", playerMove);
document.getElementById("paper").addEventListener("click", playerMove);
document.getElementById("scissors").addEventListener("click", playerMove);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("new_game").addEventListener("click", newGame);

// 
var chosenOption;
function playerMove(el) {
chosenOption = el.target.id;
gameLogic();
}
// 

var playerChoice = 0;
function gameLogic() {

  if (this.chosenOption == 'rock') {
     playerChoice = 1;
 
  var computerChoice = Math.floor(Math.random() * 3 + 1);
  if (playerChoice == computerChoice){
    
   gameMessage.insertAdjacentHTML('afterbegin' ,'DRAW!! '+'<br>'+' you played ROCk'+'<br>'+ 'computer played ROCK'+'<br>'+'<br>' );
  } else if (playerChoice == 1 && computerChoice == 2)
      {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! '+'<br>'+ 'you played ROCK'+'<br>'+ 'computer played PAPER '+'<br>'+'<br>'); 
        ComputerScore++;
      }else {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! '+'<br>'+ 'you played ROCK'+'<br>'+ 'computer played SCISSORS '+'<br>'+'<br>');   
        playerScore++;
      }
  roundCounter++;
  resultCheck();
  update();
                    // PAPER //
  }  else if (this.chosenOption == 'paper') {
   playerChoice = 2;
  var computerChoice = Math.floor(Math.random() * 3 + 1);
  if (playerChoice == computerChoice){    
    gameMessage.insertAdjacentHTML('afterbegin', 'DRAW!! '+'<br>'+' you played PAPER'+'<br>'+ 'computer played PAPER'+'<br>'+'<br>');
  } else if (playerChoice == 2 && computerChoice == 3)
      {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! '+'<br>'+ 'you played PAPER'+'<br>'+ 'computer played SCISSORS '+'<br>'+'<br>');
        ComputerScore++;
      }else {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! '+'<br>'+ 'you played PAPER'+'<br>'+ 'computer played ROCK '+'<br>'+'<br>');
        playerScore++;
      } 
  roundCounter++;
  update();
  resultCheck();
              // SCISSORS //
  }else if (this.chosenOption == 'scissors') {
     playerChoice = 3;
  var computerChoice = Math.floor(Math.random() * 3 + 1);
  if (playerChoice == computerChoice){  
    gameMessage.insertAdjacentHTML('afterbegin', 'DRAW!! '+'<br>'+' you played SCISSORS'+'<br>'+'computer played    SCISSORS'+'<br>'+'<br>');
  } else if (playerChoice == 3 && computerChoice == 1)
      {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! '+'<br>'+ 'you played SCISSORS'+'<br>'+ 'computer played ROCK '+'<br>'+'<br>'); 
        ComputerScore++;
      }else {
        gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! '+'<br>'+ 'you played SCISSORS'+'<br>'+ 'computer played PAPER '+'<br>'+'<br>');
        playerScore++;
      } 
  roundCounter++;
  update();
  resultCheck();
  }
}

update();

function reset (){
  playerScore = 0;
  playerScoreOutput.innerHTML = playerScore;
  ComputerScore =0;
  ComputerScoreOutput.innerHTML= ComputerScore;
  gameMessage.innerHTML =' ';
  roundCounter=0;
  roundCounterOutput.innerHTML = roundCounter;
}

function newGame() {
  reset();
  setRounds =  prompt("How many rounds do you wanna play?");
}

  function resultCheck(){
  if(setRounds == playerScore ){
    alert("game ended You won !!");
   }
    else if(setRounds == ComputerScore){
    alert("game ended You lost !!");
  } 
}

function update(){
playerScoreOutput.innerHTML = playerScore;
ComputerScoreOutput.innerHTML= ComputerScore;
roundCounterOutput.innerHTML = roundCounter;
}