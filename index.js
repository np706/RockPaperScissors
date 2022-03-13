// This is my first JavaScript Code
let userchoice = undefined
let compchoice = undefined
let header = undefined

header = document.querySelector("h1")
header.innerHTML = undefined
header.innerHTML = "Rock, Paper, Scissors, Shoot....";
userchoice = window.prompt("Rock, Paper, or Scissors?");
let choices = ["Rock","Paper","Scissors"];
compchoice = choices[Math.floor(Math.random() * choices.length)];

console.log(compchoice)
console.log(userchoice)
console.log(typeof compchoice)
console.log(typeof userchoice)

header.innerHTML = "Rock, Paper, Scissors, Shoot....";
//
if (compchoice == "Rock") {
    if (userchoice == "Scissors") {
        header.innerHTML = "You Lose :( Computer selected Rock";
    } 
    else if (userchoice == "Paper") {
        header.innerHTML = "You Win!!! Computer selected Rock";
    } 
    else if (userchoice == "Rock") {
        header.innerHTML = "Please Refresh Browser Computer selected Rock";
    }
} 
else if (compchoice == "Paper") {
    if (userchoice == "Scissors") {
        header.innerHTML = "You Win!!! Computer selected Paper";
    } 
    else if (userchoice == "Rock") {
        header.innerHTML = "You Lose :( Computer selected Paper";
    } 
    else if (userchoice == "Paper") {
        header.innerHTML = "Please Refresh Browser Computer selected Paper";
    }
} 
else if (compchoice == "Scissors") {
    if (userchoice == "Scissors") {
        header.innerHTML = "Please Refresh Browser Computer selected Scissors";
    } 
    else if (userchoice == "Paper") {
        header.innerHTML = "You Lose :( Computer selected Scissors";
    } 
    else if (userchoice == "Rock") {
        header.innerHTML = "You Win!!! Computer selected Scissors";
    }
}


//let name = "Nate";
//const interestRate = 0.3;

//let person = { name: 'Nathan', age: 23}
//person.name = 'nate'

//console.log(person.name);

//cannot be a reserved keyword "let, if, else, var"
//should be meaningful, cannot start with a number
//cannot contain space or hyphen, case sensitive 