    function getComputerChoice(){
        let computerChoice = Math.floor(Math.random() * 3)
        switch(computerChoice) {
            case 0:
              return "rock"
            case 1:
                return "paper"
            case 2:
                return "scissors"
            default:
              console.log("Something went wrong with getComputerChoice")
          }
    }

    function playRound(playerSelection){
        let computerSelection = getComputerChoice();

        if(playerSelection == computerSelection){
            return "It's a tie, you both chose " + playerSelection + "!"
        } else if(playerSelection == "rock" && computerSelection == "paper"){
            return "The computer chose "+ computerSelection +" and you chose "+ playerSelection +", you lost!"
        } else if(playerSelection == "rock" && computerSelection == "scissors"){
            return "The computer chose "+ computerSelection +" and you chose "+ playerSelection +", you won!"
        } else if(playerSelection == "paper" && computerSelection == "rock"){
            return "The computer chose "+ computerSelection +" and you chose "+ playerSelection +", you won!"
        } else if(playerSelection == "paper" && computerSelection == "scissors"){
            return "The computer chose "+ computerSelection +" and you chose "+ playerSelection +", you lost!"
        } else if(playerSelection == "scissors" && computerSelection == "rock"){
            return "The computer chose "+ computerSelection +" and you chose "+ playerSelection +", you lost!"
        } else if(playerSelection == "scissors" && computerSelection == "paper"){
            return "The computer chose "+ computerSelection +" and you chose "+ playerSelection +", you won!"
        } else return "This is a game of Rock Paper Scissors, you can't use \""+playerSelection+"\" here!"
    }

    const buttons = document.querySelectorAll('button');
    const mainText = document.querySelector('#main-text');
    const logsText = document.querySelector('#logs');
    const roundCountText = document.querySelector('#round-count');

    let gameState = true;
    let roundCount = 0;

    let playerScore = 0;
    let computerScore = 0;
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(gameState == true){
                roundCount++
                if(roundCount < 5 ){
                    let finalDisplayMessage = playRound(button.id);
                    logsText.textContent = logsText.textContent + " Round "+(roundCount) + ": " + finalDisplayMessage;
                    mainText.textContent = finalDisplayMessage +" What is your choice for round " + (roundCount+1) + "?";
                } else if(roundCount < 6 ){let finalDisplayMessage = playRound(button.id);
                    logsText.textContent = logsText.textContent + " Round "+(roundCount) + ": " + finalDisplayMessage;
                    mainText.textContent = finalDisplayMessage +" The match is over!";
                    roundCountText.textContent = "The Player's score is "+playerScore+" and the Computer's score is "+computerScore;
                    logsText.textContent = logsText.textContent + " Final Score: " +roundCountText.textContent + ".";
                    gameState = false;
                } else {
                    console.log("Something went wrong with roundCount: " + roundCount);
                }

                if((mainText.textContent).includes("you won")) playerScore++
                else if ((mainText.textContent).includes("you lost")) computerScore++

            } else mainText.textContent = "No game is currently playing right now, do you want a rematch?"
            });
        });

