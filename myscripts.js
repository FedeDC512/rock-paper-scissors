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

    function rematchGame(){
        gameState = true;
        logsText.innerHTML = logsText.innerHTML + "<br>A new match has started!<br>";
        mainText.innerHTML = "A new 5-round game of Rock Paper Scissors has started!<br>What is your choice?";
        roundCountText.innerHTML = "The new match hasn't started yet."
        playerScore = 0;
        computerScore = 0;
        roundCount = 0;
    }

    const buttons = document.querySelectorAll('.rps-button');
    const mainText = document.querySelector('#main-text');
    const logsText = document.querySelector('#logs');
    const roundCountText = document.querySelector('#round-count');
    const rematch = document.querySelector('#rematch');

    let gameState = true;
    let roundCount = 0;

    let playerScore = 0;
    let computerScore = 0;

    rematch.onclick = () => rematchGame();
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(gameState == true){
                roundCount++
                if(roundCount < 5 ){
                    let finalDisplayMessage = playRound(button.id);
                    logsText.innerHTML = logsText.innerHTML + "Round "+(roundCount) + ": " + finalDisplayMessage + "<br>";
                    mainText.innerHTML = finalDisplayMessage +"<br>What is your choice for round " + (roundCount+1) + "?";
                } else if(roundCount < 6 ){
                    let finalDisplayMessage = playRound(button.id);
                    logsText.innerHTML = logsText.innerHTML + "Round "+(roundCount) + ": " + finalDisplayMessage + "<br>";
                    mainText.innerHTML = finalDisplayMessage +"<br>The match is over!";
                    gameState = false;
                } else {
                    console.log("Something went wrong with roundCount: " + roundCount);
                }

                if((mainText.innerHTML).includes("you won!")) playerScore++
                else if ((mainText.innerHTML).includes("you lost!")) computerScore++

                if(roundCount == 5){
                    if(playerScore < computerScore){
                        roundCountText.innerHTML = "The Player's score is "+playerScore+" and the Computer's score is "+computerScore+". You lost the game!";
                    } else if (playerScore > computerScore){
                        roundCountText.innerHTML = "The Player's score is "+playerScore+" and the Computer's score is "+computerScore+". You won the game!";
                    } else roundCountText.innerHTML = "The Player's score is "+playerScore+" and the Computer's score is "+computerScore+". It's a tie!";
                    logsText.innerHTML = logsText.innerHTML + "Final Score: " +roundCountText.innerHTML + "<br>";
                } else roundCountText.innerHTML = "The Player's score is "+playerScore+" and the Computer's score is "+computerScore+".";

            } else mainText.innerHTML = "No game is currently playing right now.<br>Do you want to start a rematch?"
            });
        });

