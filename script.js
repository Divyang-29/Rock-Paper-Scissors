let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const drawGame = () => {
    console.log("Game was draw.")
    msg.innerText = "Game was Draw, Play again"
    msg.style.backgroundColor = "#081B31"
};

const showWinner = (userWin,computerChoice,userChioce) => {
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChioce} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost ${computerChoice} beats your ${userChioce}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const option = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx]
};

const playGame = (userChioce) => {
    //console.log("User choice = ",userChioce);
    const computerChoice  = genCompChoice();
    //console.log("Computer choice = ",computerChoice); 

    if(userChioce === computerChoice)
    {
        drawGame();
    }
    else{
       let userWin = true;
       if(userChioce === "rock")
       {//scissor,paper
         userWin = computerChoice === "paper" ? false : true;
       }
       else if(userScore == "paper")
       {//rock,scissor
        userWin = computerChoice === "scissor" ? false :true;
       }
       else{//paper,rock
        userWin = computerChoice === "rock" ? false :true;
       }
       showWinner(userWin,userChioce,computerChoice)
    }
   
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChioce = choice.getAttribute("id");
        playGame(userChioce);
    });
});
