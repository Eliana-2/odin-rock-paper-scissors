//function that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay()
{
  //get one random integer out of 3 possible values
  let randInt = Math.floor(Math.random() * 3);
  //assign string based on integer value
  switch(randInt)
  {
    case 0:
      return `Rock`;
    case 1:
      return `Paper`;
    case 2:
      return `Scissors`;
    default:
      return `Error`;
  }
}

//function that plays a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection)
{
  resultP = document.querySelector(`#result`);

  //get new selections if result is a draw
  if(playerSelection === computerSelection)
  {
    resultP.textContent = `It's a draw! Try again!`;
    return;
  }

  //check result and return it as a string
  switch(playerSelection)
  {
    case `Rock`:
      resultP.textContent = (computerSelection === `Paper`) ? `You Lose! Paper beats Rock` : `You Win! Rock beats Scissors`;
      return;
    case `Scissors`:
      resultP.textContent = (computerSelection === `Rock`) ? `You Lose! Rock beats Scissors` : `You Win! Scissors beats Paper`;
      return;
    case `Paper`:
      resultP.textContent = (computerSelection === `Scissors`) ? `You Lose! Scissors beats Paper` : `You Win! Paper beats Rock`;
      return;
  }
}

//fucntion that plays a five-round game of rock, paper, scissors
function game()
{
  //count player and computer wins
  let playerWins = 0;
  let computerWins = 0;

  //play five rounds
  for (let i = 0; i < 5; i++)
  {
    //get round result
    let roundResult = playRound(prompt(`Rock, paper, scissors!`).toLowerCase(), computerPlay().toLowerCase());
    
    //check round result and add to player or computer wins
    (roundResult.substr(0,7) === `You win`) ? playerWins += 1 : computerWins += 1;
    
    //display round result
    console.log(roundResult)
  }

  //check match result
  let matchResult = (playerWins > computerWins) ? `You won the game!` : `You lost the game!`;
  //display match result
  console.log(matchResult);
}

const buttons = document.querySelectorAll(`.rpsButton`);
buttons.forEach((button) => {
  button.addEventListener(`click`, function(e) {
    playRound(e.target.textContent, computerPlay());
  })
})

//play one game of rock, paper, scissors
//game();