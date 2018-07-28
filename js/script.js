var gameMessage = document.getElementById('game__message');
var playerScoreOutput = document.getElementById('playerScore');
var computerScoreOutput = document.getElementById('ComputerScore');
var roundCounterOutput = document.getElementById('roundCounter');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var modalOutput = document.getElementById('modal-text');
var modalOutput2 = document.getElementById('modal-text2');
var ot = document.getElementById('test');
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("new_game").addEventListener("click", newGame);
var params = {
  playerScore: 0,
  computerScore: 0,
  roundCounter: 0,
  setRounds: 100,
  progress: [],
}
var chosenOption;

function playerMove(el) {
  chosenOption = el.target.id;
  gameLogic();
}
var buttons = document.querySelectorAll('.player-move');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playerMove);
}
var playerChoice = 0;

function gameLogic() {
  if (this.chosenOption == 'rock') {
    playerChoice = 1;
    var computerChoice = Math.floor(Math.random() * 3 + 1);
    if (playerChoice == computerChoice) {
      gameMessage.insertAdjacentHTML('afterbegin', 'DRAW!! ' + '<br>' + ' you played ROCk' + '<br>' + 'computer played ROCK' + '<br>' + '<br>');
    } else if (playerChoice == 1 && computerChoice == 2) {
      gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! ' + '<br>' + 'you played ROCK' + '<br>' + 'computer played PAPER ' + '<br>' + '<br>');
      params.computerScore++;
    } else {
      gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! ' + '<br>' + 'you played ROCK' + '<br>' + 'computer played SCISSORS ' + '<br>' + '<br>');
      params.playerScore++;
    }
    params.roundCounter++;
    resultCheck();
    update();
    var computerPick;
    if (computerChoice == 1) {
      computePick = 'rock';
    } else if (computerChoice == 2) {
      computePick = 'paper';
    } else if (computerChoice == 3) {
      computePick = 'scissors';
    }
    var currentRound = {
      playerScore: params.playerScore,
      computerScore: params.computerScore,
      roundCounter: params.roundCounter,
      playerMove: this.chosenOption,
      computeMove: computePick
    }
    params.progress.push(currentRound);
    printResult()
    // PAPER //
  } else if (this.chosenOption == 'paper') {
    playerChoice = 2;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    if (playerChoice == computerChoice) {
      gameMessage.insertAdjacentHTML('afterbegin', 'DRAW!! ' + '<br>' + ' you played PAPER' + '<br>' + 'computer played PAPER' + '<br>' + '<br>');
    } else if (playerChoice == 2 && computerChoice == 3) {
      gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! ' + '<br>' + 'you played PAPER' + '<br>' + 'computer played SCISSORS ' + '<br>' + '<br>');
      params.computerScore++;
    } else {
      gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! ' + '<br>' + 'you played PAPER' + '<br>' + 'computer played ROCK ' + '<br>' + '<br>');
      params.playerScore++;
    }
    params.roundCounter++;
    update();
    resultCheck();
    var computerPick;
    if (computerChoice == 1) {
      computePick = 'rock';
    } else if (computerChoice == 2) {
      computePick = 'paper';
    } else if (computerChoice == 3) {
      computePick = 'scissors';
    }
    var currentRound = {
      playerScore: params.playerScore,
      computerScore: params.computerScore,
      roundCounter: params.roundCounter,
      playerMove: this.chosenOption,
      computeMove: computePick
    }
    params.progress.push(currentRound);
    printResult()
    // SCISSORS //
  } else if (this.chosenOption == 'scissors') {
    playerChoice = 3;
    computerChoice = Math.floor(Math.random() * 3 + 1);
    if (playerChoice == computerChoice) {
      gameMessage.insertAdjacentHTML('afterbegin', 'DRAW!! ' + '<br>' + ' you played SCISSORS' + '<br>' + 'computer played    SCISSORS' + '<br>' + '<br>');
    } else if (playerChoice == 3 && computerChoice == 1) {
      gameMessage.insertAdjacentHTML('afterbegin', 'YOU LOSE!! ' + '<br>' + 'you played SCISSORS' + '<br>' + 'computer played ROCK ' + '<br>' + '<br>');
      params.computerScore++;
    } else {
      gameMessage.insertAdjacentHTML('afterbegin', 'YOU WON!! ' + '<br>' + 'you played SCISSORS' + '<br>' + 'computer played PAPER ' + '<br>' + '<br>');
      params.playerScore++;
    }
    params.roundCounter++;
    update();
    resultCheck();
    var computerPick;
    if (computerChoice == 1) {
      computePick = 'rock';
    } else if (computerChoice == 2) {
      computePick = 'paper';
    } else if (computerChoice == 3) {
      computePick = 'scissors';
    }
    var currentRound = {
      playerScore: params.playerScore,
      computerScore: params.computerScore,
      roundCounter: params.roundCounter,
      playerMove: this.chosenOption,
      computeMove: computePick
    }
    params.progress.push(currentRound);
    printResult()
  }
}
update();

function reset() {
  params.playerScore = 0;
  playerScoreOutput.innerHTML = params.playerScore;
  params.computerScore = 0;
  computerScoreOutput.innerHTML = params.computerScore;
  gameMessage.innerHTML = ' ';
  params.roundCounter = 0;
  roundCounterOutput.innerHTML = params.roundCounter;
}

function newGame() {
  reset();
  clearTable();
  params.setRounds = prompt("How many rounds do you wanna play?");
}

function resultCheck() {
  if (params.setRounds == params.roundCounter) {
    document.getElementById("myModal").style.display = "block";
    if (params.playerScore > params.computerScore) {
      modalOutput.innerHTML = ('You won');
    } else if (params.playerScore < params.computerScore) {
      modalOutput.innerHTML = ('You lost');
    } else if (params.playerScore == params.computerScore) {
      modalOutput.innerHTML = ('Draw');
    }
  }
}

function update() {
  playerScoreOutput.innerHTML = params.playerScore;
  computerScoreOutput.innerHTML = params.computerScore;
  roundCounterOutput.innerHTML = params.roundCounter;
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function printResult() {
  var table = document.getElementById("#tableResult");
  var row = table.insertRow(params.roundCounter);
  var roundT = row.insertCell(0);
  var playerMoveT = row.insertCell(1);
  var computerrMoveT = row.insertCell(2);
  var resoultT = row.insertCell(3);
  roundT.insertAdjacentHTML('beforeend', params.roundCounter);
  playerMoveT.insertAdjacentHTML('beforeend', this.chosenOption);
  computerrMoveT.insertAdjacentHTML('beforeend', computePick);
  resoultT.insertAdjacentHTML('beforeend', params.playerScore + ' - ' + params.computerScore);
}

function clearTable() {
  var table = document.getElementById("#tableResult");
  var rowNumbers = document.getElementById("#tableResult").rows.length;
  for (var i = 1; i < rowNumbers; i++) {
    table.deleteRow(1);
  }
}