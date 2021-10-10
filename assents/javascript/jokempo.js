const player = document.querySelectorAll('.jogo__player__escolha img');
const quadroPlayer = document.getElementById('Player');
const quadroComputer = document.getElementById('Computer');

const tesouraComputer = document.getElementById('computer-tesoura');
const papelComputer = document.getElementById('computer-papel');
const pedraComputer = document.getElementById('computer-pedra');

const mostraTexto = document.getElementById('textWin');
let text = '';

const jogoTela = document.getElementById('jogo');
const button = document.createElement('button');
button.classList.add('buttonReset');
button.setAttribute("onclick", "resetGame()");
button.innerText = "Zerar placar";
jogoTela.appendChild(button);

const painelPlayer = document.createElement('h4')
painelPlayer.id = "pointsPlayer";
painelPlayer.style.fontSize = "40px";
let pointsPlayer = 0;
painelPlayer.innerText = pointsPlayer;
quadroPlayer.appendChild(painelPlayer);

const panelComputer = document.createElement('h4')
panelComputer.id = "pointsComputer";
panelComputer.style.fontSize = "40px";

let pointsComputer = 0;
panelComputer.innerText = pointsComputer;
quadroComputer.appendChild(panelComputer);

function partida(escolhaJogador, computer) {
    if(escolhaJogador === 'player-pedra' && computer === 'tesoura') {
        pointsPlayer++
        document.getElementById("pointsPlayer").innerHTML = pointsPlayer;
        vitoria(true)

    } else if (escolhaJogador === 'player-pedra' && computer === 'papel') {
        pointsComputer++
        document.getElementById("pointsComputer").innerHTML = pointsComputer;
        vitoria(false)

    } else if (escolhaJogador === 'player-papel' && computer === 'pedra') {
        pointsPlayer++
        document.getElementById("pointsPlayer").innerHTML = pointsPlayer;
        vitoria(true)

    } else if (escolhaJogador === 'player-papel' && computer === 'tesoura') {
        pointsComputer++
        document.getElementById("pointsComputer").innerHTML = pointsComputer;
        vitoria(false)
    } else if (escolhaJogador === 'player-tesoura' && computer === 'papel') {
        pointsPlayer++
        document.getElementById("pointsPlayer").innerHTML = pointsPlayer;
        vitoria(true)
   } else if (escolhaJogador === 'player-tesoura' && computer === 'pedra') {
        pointsComputer++
        document.getElementById("pointsComputer").innerHTML = pointsComputer;
        vitoria(false)
    } else {
        text = "Empatou!!"
        mostraTexto.innerText = text 
        setTimeout(() => {mostraTexto.innerText = ''} , 3000)

    }
        setTimeout(() => {limpaBorda()}, 3000)
}

function limpaBorda() {
    tesouraComputer.style.border = "none";
    papelComputer.style.border = "none";
    pedraComputer.style.border = "none";

}

function escolhaComputer(){
    const opçõesComputer = ['pedra','papel','tesoura']
    let escolha = Math.floor(Math.random() * opçõesComputer.length);
    return opçõesComputer[escolha];
}


function selecaoComputer() {
    let selecao = escolhaComputer();
    if (selecao === 'pedra') {
        pedraComputer.style.border = "5px solid red";
    } else if (selecao === "papel") {
        papelComputer.style.border = "5px solid red";
    } else if (selecao === 'tesoura') {
        tesouraComputer.style.border = "5px solid red";
    }
}

function vitoria(cond) {
    if (cond) {
        text = "Você venceu!!"
        mostraTexto.innerText = text 
        setTimeout(() => {mostraTexto.innerText = ''} , 3000)

    } else {
        text = "Você perdeu!!"
        mostraTexto.innerText = text 
        setTimeout(() => {mostraTexto.innerText = ''} , 3000)

    } 
}

function resetGame() {
    pointsPlayer = 0;
    painelPlayer.innerText = pointsPlayer;

    pointsComputer = 0;
    panelComputer.innerText = pointsComputer;

    jogoText.innerHTML = '' 
    
}

function playAudio(){
    const audio = document.querySelector('audio')
    audio.play()
}

function jogo(evt) {
    let escolhaJogador = evt.target.id
    playAudio()
    let computer = setTimeout(() => {escolhaComputer()}, 3000) ;
    selecaoComputer()
    setTimeout(() => {partida(escolhaJogador, computer)}, 4000);
}

player.forEach((li) => li.addEventListener('click', jogo));