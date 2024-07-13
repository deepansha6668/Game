let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice"); // access rock,paper,scissor
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const gencompchoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
 
const drawGame = () => {
    
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor = "black";


};
const showwinner = ( userWin , userchoice , compchoice ) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
    
    msg.innerText="you win!";
    msg.style.backgroundColor = "green";

    } 
    else {
        compScore++;
        compScorePara.innerText = compScore;

    
    msg.innerText="You Lose!";
    msg.style.backgroundColor = "red";


    }
}

const playgame = (userchoice) => {
    console.log("userchoice =" , userchoice);
    //generate computer choice
    const compchoice = gencompchoice();
    console.log("compchoice=",compchoice);
   
    if (userchoice === compchoice) {
        //draw game
        drawGame();
    }
    
     
    else {
        
        if (userchoice === "rock") {
         // scissors,paper
         userWin = compchoice === "paper" ? false : true;
        } 
         else if (userchoice === "paper") {
            // rock,scissors
            userWin = compchoice === "scissors" ? false : true;
           }
        else {
            // rock,paper
            userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin , userchoice , compchoice);
    }
};

choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);
    });
});

