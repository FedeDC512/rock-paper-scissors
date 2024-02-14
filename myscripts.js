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

    function playRound(playerSelection, computerSelection){
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
0
    }

    function playGame(){
        let playerScore = 0;
        let computerScore = 0;

        let result = "A 5-round game of Rock Paper Scissors against the computer is about to begin!"
        console.log(result)
        for(let roundNumber = 0; roundNumber < 5; roundNumber++){
            let playerSelection = prompt(result+" What is your choice for round " + (roundNumber+1) + "?");
            result = playRound(playerSelection.toLocaleLowerCase(), getComputerChoice())
            console.log(result)

            if(result.includes("you won")) playerScore++
            else if (result.includes("you lost")) computerScore++
        }
        console.log("The game is over. The Player's score is "+playerScore+" and the Computer's score is "+computerScore)
    }

playGame()

