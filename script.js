//function that randomly returns 'Rock', 'Paper', or 'Scissors'
function computerPlay()
{
  //get one random integer out of 3 possible values
  let randInt = Math.floor(Math.random() * 3);
  //assign string based on integer value
  switch(randInt)
  {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
    default:
      return 'Error';
  }
}


