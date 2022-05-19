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
  //convert to lowercase to remain case insensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  //compare selections
  if(playerSelection === computerSelection)
  {
    return `It's a draw!`;
  }
  else
  {
    switch(playerSelection)
    {
      case `rock`:
        return (computerSelection === `paper`) ? `You Lose! Paper beats Rock` : `You Win! Rock beats Scissors`;
      case `scissors`:
        return (computerSelection === `rock`) ? `You Lose! Rock beats Scissors` : `You Win! Scissors beats Paper`;
      case `paper`:
        return (computerSelection === `scissors`) ? `You Lose! Scissors beats Paper` : `You Win! Paper beats Rock`;
    }
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));