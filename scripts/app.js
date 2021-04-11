// Contador
var Time = 40;
var Countdown = setInterval(function(){
    document.getElementById("tempo").innerHTML = Time;
    document.getElementById("tempo2").innerHTML = Time;

if(Time === 0){
    console.log("Tempo esgotado")
    clearInterval(Time);
    // window.location.href = "https://juliamaglhaes.github.io/Login_Client_Lol/";
    
}
    else{
        Time--;
    }
}, 1000);


// Seleção campeões

const avatar = document.querySelector('.campeao-selecionado');
const mapa = document.querySelector('.mapa');
const box = document.querySelector('.box');
const nomeCampeao = document.querySelector('#nome-escolha');

let arrayChampions = [];

// Funções

function getBackground (id){
    return `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg)`
}

function selectBackground ({id, name}){
    avatar.style.backgroundImage = `url(https://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${id}.png)`;
    mapa.style.backgroundImage = getBackground(id);
    box.style.backgroundImage = getBackground(id);
    nomeCampeao.innerText = name;
}

function gerarImagem({ id, name }) {
    const img = document.createElement('img');

    img.setAttribute("data-nome", name);
    img.setAttribute("id", 'heroi_imagem');
    img.setAttribute("src", `https://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${id}.png`);
    img.setAttribute("alt", id);
    return img;
}

function gerarName(champion){
    const name = document.createElement('span');
    name.innerText = champion.name;
    return name;
}

function gerarSelecaoElementos(champion){
    const selecao = document.createElement('div');
    selecao.onclick = () => selectBackground(champion);
    selecao.className = 'hero_box'
    return selecao;
}


function campeoesLista(){
    const container = document.querySelector('.campeoes');

    const aleatorio ={
        name:'Aleatório',
        id: 'none',
    }
    // const aleatorio = document.createElement('div');
    // aleatorio.name = 'Aleatorio';
    // aleatorio.id = 'none';
    // aleatorio.img = 'Aleatorio';

    arrayChampions.unshift(aleatorio)
    arrayChampions.forEach((champion) =>{
        const selecao = gerarSelecaoElementos(champion);
        const img = gerarImagem(champion);
        const name = gerarName(champion);

        selecao.appendChild(img);
        selecao.appendChild(name);
        container.append(selecao);

        if(img.src == 'https://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/none.png'){
            img.setAttribute("src", `https://www.publicdomainpictures.net/pictures/40000/velka/question-mark.jpg`);
        }
        // Pegar elementos aleatórios nos campeões
        // img.onclick = function(){
        //     var aleatoriogerado = arrayChampions[Math.floor(Math.random() * arrayChampions.length)];
        //     console.log(aleatoriogerado)
        // }
    })
}

const fetchCampeoes = async () => {
    const urlCampeao  = `https://ddragon.leagueoflegends.com/cdn/11.7.1/data/pt_BR/champion.json`

    await fetch(urlCampeao)
    .then(response => response.json())
    .then(response => {
        const data = Object.keys(response.data);
        const parsedResponse = data.map((item) => {
            return response.data[item]
        })
        arrayChampions = parsedResponse;
    });
}

async function carregarListas() {
    await fetchCampeoes()
    campeoesLista()
}

carregarListas()