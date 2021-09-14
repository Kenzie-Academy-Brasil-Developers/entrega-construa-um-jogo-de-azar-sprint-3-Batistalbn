const quadroPlayer = document.getElementById('Player');
const quadroComputer = document.getElementById('Computer');

const pedraPlayer = document.getElementById('player-pedra');
const papelPlayer = document.getElementById('player-papel');
const tesouraPlayer = document.getElementById('player-tesoura');

const painelPlayer = document.createElement('h4')
let pointsPlayer = 0;
painelPlayer.innerText = pointsPlayer;
quadroPlayer.appendChild(painelPlayer);

const panelComputer = document.createElement('h4')
let pointsComputer = 0;
panelComputer.innerText = pointsComputer;
quadroComputer.appendChild(panelComputer);

let player
let computer

function numeroAletorio() {
    let number = Math.floor(Math.random() *  (3 - 1 + 1) + 1);
    return number;
}

function partida(player, computer) {
    
    if (player > computer) {
        pointsPlayer += 1;
    }  else {
        pointsComputer += 1;
    }
}

pedraPlayer.addEventListener("click", function(){
    pedraPlayer.style.border = "2px solid red"
    player = 1;
    computer = numeroAletorio();
    partida(player, computer);  
    console.log(pointsPlayer);
    console.log(pointsComputer);

});

papelPlayer.addEventListener("click", function(){
    papelPlayer.style.border = "2px solid red"
    player = 2;
    computer = numeroAletorio();
    partida(player, computer);

});

tesouraPlayer.addEventListener("click", function(){
    tesouraPlayer.style.border = "2px solid red"
    player = 3;
    computer = numeroAletorio();
    
});
