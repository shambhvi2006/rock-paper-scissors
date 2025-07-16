
let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const scoreDisplay = document.querySelector('.score');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');


const genCompChoice=()=>{

    const options=["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}
const drawgame = () => {
    //console.log("It's a draw!");
    message.innerText = "It's a draw!";
}
const showwinner=(userwin, userChoice, computerChoice) =>{
    if(userwin) {
        userScore++;
        //console.log("You win! Your score: " + userScore);
        userScoreDisplay.innerText = userScore;
        message.innerText = "You win!";
        message.style.backgroundColor = "green";

    } else {
        computerScore++;
        //console.log("Computer wins! Computer score: " + computerScore);
        computerScoreDisplay.innerText = computerScore;
        message.innerText = "Computer wins!";
        message.style.backgroundColor = "red";
    }
    //console.log("Current Score - You: " + userScore + ", Computer: " + computerScore);
}

const playgame = (userChoice) =>{
    //console.log("user choice=", userChoice);
    const computerChoice = genCompChoice();
    //console.log("computer choice=", computerChoice);
    if(userChoice === computerChoice) {
        drawgame();
    } else {
        let userwin=true;
        if(userChoice ==="rock"){
            userwin = computerChoice === "scissors"? true : false;
        } else if(userChoice === "paper"){
            userwin = computerChoice === "rock"? true : false;
        } else {
            userwin = computerChoice === "paper"? true : false; 
        }
        showwinner(userwin, userChoice, computerChoice);
    }

}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playgame(userChoice);
    })
});