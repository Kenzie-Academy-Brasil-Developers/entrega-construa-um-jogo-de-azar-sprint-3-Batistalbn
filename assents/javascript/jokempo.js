const player = document.querySelectorAll('.jogo__player__escolha img');
const quadroPlayer = document.getElementById('Player');
const quadroComputer = document.getElementById('Computer');

// pontuação =>
const painelPlayer = document.createElement('h4')
painelPlayer.id = "pointsPlayer";
let pointsPlayer = 0;
painelPlayer.innerText = pointsPlayer;
quadroPlayer.appendChild(painelPlayer);

const panelComputer = document.createElement('h4')
panelComputer.id = "pointsComputer";
let pointsComputer = 0;
panelComputer.innerText = pointsComputer;
quadroComputer.appendChild(panelComputer);

function partida(escolhaJogador, computer) {
    if(escolhaJogador === 'player-pedra' && computer === 'tesoura') {
        pointsPlayer++
        document.getElementById("pointsPlayer").innerHTML = pointsPlayer;
    } else if (escolhaJogador === 'player-pedra' && computer === 'papel') {
        pointsComputer++
        document.getElementById("pointsComputer").innerHTML = pointsComputer;
    } else if (escolhaJogador === 'player-papel' && computer === 'pedra') {
        pointsPlayer++
        document.getElementById("pointsPlayer").innerHTML = pointsPlayer;
    } else if (escolhaJogador === 'player-papel' && computer === 'tesoura') {
        pointsComputer++
        document.getElementById("pointsComputer").innerHTML = pointsComputer;
    } else if (escolhaJogador === 'player-tesoura' && computer === 'papel') {
        pointsPlayer++
        document.getElementById("pointsPlayer").innerHTML = pointsPlayer;
    } else if (escolhaJogador === 'player-tesoura' && computer === 'pedra') {
        pointsComputer++
        document.getElementById("pointsComputer").innerHTML = pointsComputer;
    }
}
// <= pontuação

function escolhaComputer(){
    const opçõesComputer = ['pedra','papel','tesoura']
    let escolha = Math.floor(Math.random() * opçõesComputer.length);
    return opçõesComputer[escolha];
}

function vitoria() {
    const mostraTexto = document.getElementById('textWin');
    let text = '';
    if (pointsPlayer === 3) {
        text = "Você venceu!!"
        mostraTexto.innerText = text  
    } else if (pointsComputer === 3) {
        text = "Você perdeu!!"
        mostraTexto.innerText = text
    } 
}

const jogoText = document.getElementById('jogoTextWin');
const button = document.createElement('button');

function stopGame() {
    if (pointsPlayer === 3 || pointsComputer === 3) {
        player.forEach((li) => li.removeEventListener('click', jogo))
        
        button.classList.add('buttonReset');
        button.setAttribute("onclick", "resetGame()");
        button.innerText = "Jogar novamente";
        jogoText.appendChild(button);
    }
}

function resetGame() {
    pointsPlayer = 0;
    painelPlayer.innerText = pointsPlayer;

    pointsComputer = 0;
    panelComputer.innerText = pointsComputer;

    jogoText.innerHTML = '' 
    player.forEach((li) => li.addEventListener('click', jogo));
}

function jogo(evt) {
    let escolhaJogador = evt.target.id
    let computer = escolhaComputer();
    console.log(escolhaJogador)
    console.log(computer)
    partida(escolhaJogador, computer);
    vitoria()
    stopGame()
}

player.forEach((li) => li.addEventListener('click', jogo));