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
  

  //get new selections if result is a draw
  if(playerSelection === computerSelection)
  {
    return `It's a draw! Try again!`;
  }

  //check result and return it as a string
  switch(playerSelection)
  {
    case `Rock`:
      return (computerSelection === `Paper`) ? `You Lose! Paper beats Rock` : `You Win! Rock beats Scissors`;
    case `Scissors`:
      return (computerSelection === `Rock`) ? `You Lose! Rock beats Scissors` : `You Win! Scissors beats Paper`;
    case `Paper`:
      return (computerSelection === `Scissors`) ? `You Lose! Scissors beats Paper` : `You Win! Paper beats Rock`;
  }
}

function updateScore(resultString)
{
  console.log(resultString.substr(0.7));
  if(resultString.substr(0,1) === `I`)
  {
    return;
  }
  else
  {
     const resultCount = (resultString.substr(0,7) === `You Win`) ? document.querySelector(`#wins`) : document.querySelector(`#losses`);
     resultCount.textContent = (+resultCount.textContent + 1).toString();
     setTimeout(function() {
      if(resultCount.textContent === `5`)
      {
       window.confirm(resultString.substr(0, 9));
       window.location.reload();
      }
     }, 1);
  }
}

const buttons = document.querySelectorAll(`.rpsButton`);
buttons.forEach((button) => {
  button.addEventListener(`click`, function(e) {
    resultP = document.querySelector(`#result`);
    resultP.textContent = playRound(e.target.textContent, computerPlay());
    updateScore(resultP.textContent);
  })
})

//play one game of rock, paper, scissors
//game();