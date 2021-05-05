// Contador
var Time = 50;
var Countdown = setInterval(function(){
    document.getElementById("tempo").innerHTML = Time;
    document.getElementById("tempo2").innerHTML = Time;

if(Time === 0){
    console.log("Tempo esgotado")
    clearInterval(Time);
    window.location.href = "https://juliamaglhaes.github.io/Login_Client_Lol/";
    
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

function gerarAleatorio(){
    var aleatoriogerado = arrayChampions[Math.floor(Math.random() * arrayChampions.length)];
    console.log(aleatoriogerado.name, aleatoriogerado.id)

    avatar.style.backgroundImage = `url(https://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${aleatoriogerado.id}.png)`;
    mapa.style.backgroundImage = getBackground(aleatoriogerado.id);
    box.style.backgroundImage = getBackground(aleatoriogerado.id);
    nomeCampeao.innerText = aleatoriogerado.name;

}

function campeoesLista(){
    const container = document.querySelector('.campeoes');

    arrayChampions.forEach((champion) =>{
        const selecao = gerarSelecaoElementos(champion);
        const img = gerarImagem(champion);
        const name = gerarName(champion);

        selecao.appendChild(img);
        selecao.appendChild(name);
        container.append(selecao);
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
        arrayChampions = parsedResponse.slice(0, 132);
    });
}

async function carregarListas() {
    await fetchCampeoes()
    campeoesLista()
}

carregarListas()