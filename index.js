player = {
    chips : 1000
}

let hands = ["ROCK", "PAPER", "SCISSORS"]
let reset = "YOU WON AGAINST YOUR GUESS"
let reset2 = "YOU DID NOT WIN BUT I STILL LOVE YOU"
let won = false
let draw = false
let lost = false
// let leg = ["ROCK", "PAPPER", "SCISSORS"]
console.log(hands[0])

let playerEL = document.getElementById('player')
let guessEL = document.getElementById('guess')
let resultEL = document.getElementById('result')
let pabEL = document.getElementById('pab')

function pick() {
    let RandomHand = Math.floor(Math.random()*3)
    if (RandomHand === 0){
        return "ROCK"
    } else if(RandomHand === 1){
        return "PAPER"
    } else if(RandomHand === 2){
        return "SCISSORS"
    }return RandomHand
    
}
console.log(pick())

function bar() {
   if (won === true){
    pabEL.textContent = player.chips += 100
   }
}

function bar2() {
    if (lost === true){
     pabEL.textContent = player.chips = player.chips - 200
    } 
 }

function rock() {
    playerEL.textContent = "ROCK"
    guessEL.textContent = pick()
    if (playerEL.textContent === "ROCK" && guessEL.textContent === "ROCK"){
        resultEL.textContent = "DRAW MF"
        draw = true
    }else if(playerEL.textContent === "ROCK" && guessEL.textContent === "PAPER"){
        resultEL.textContent = "YOU GOT FOLDED LOSSER"
        lost = true
        bar2()
    }else if(playerEL.textContent === "ROCK" && guessEL.textContent === "SCISSORS"){
        resultEL.textContent ="YOU BANGED YOUR WAY IN WINNER"
        won = true
        bar()
    }
}

function paper() {
    playerEL.textContent = "PAPER"
    guessEL.textContent = pick()
    if (playerEL.textContent === "PAPER" && guessEL.textContent === "ROCK"){
        resultEL.textContent = "YOU WON, YOU FOLDED A LOSSER"
        won = true
        bar()
    }else if(playerEL.textContent === "PAPER" && guessEL.textContent === "PAPER"){
        resultEL.textContent = "IT IS A DRAW MF"
        
    }else if(playerEL.textContent === "PAPER" && guessEL.textContent === "SCISSORS"){
        resultEL.textContent ="YOU CUT-OFF"
        lost = true
        bar2()
    }
}

function scissor() {
    playerEL.textContent = "SCISSORS"
    guessEL.textContent = pick()
    if (playerEL.textContent === "SCISSORS" && guessEL.textContent === "ROCK"){
        resultEL.textContent = "YOU GOT BANGED LOL LOSER"
        lost = true
        bar2()
    }else if(playerEL.textContent === "SCISSORS" && guessEL.textContent === "PAPER"){
        resultEL.textContent = "YOU CUT A MF OFF WINNER"
        won = true
        bar()
    }else if(playerEL.textContent === "SCISSORS" && guessEL.textContent === "SCISSORS"){
        resultEL.textContent ="YOU CAN'T WIN SO YOU HAD TO DRAW. SMH!"
       
    }
}


