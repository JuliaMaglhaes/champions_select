var Time = 86;
var Countdown = setInterval(function(){
    document.getElementById("tempo").innerHTML = Time;
    document.getElementById("tempo2").innerHTML = Time;

if(Time === 0 ){
    return true;
}
    else{
        Time--;
    }
}, 1000);

// Seleção





const avatar = document.querySelector('.campeao-selecionado');
const campeoess = document.querySelector('.campeoes');
const mapa = document.querySelector('.mapa')
const box = document.querySelector('.box')

function Texto (self){
    return self
}

function Mapa (self){
    return "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+self+"_0.jpg"
}

const fetchCampeoes = async () => {
    const urlCampeao  = `https://ddragon.leagueoflegends.com/cdn/11.7.1/data/pt_BR/champion.json`

    await fetch(urlCampeao)
    .then(response => response.json())
    .then(response =>{ 
        nomes = Object.keys(response.data)
        accumulator = ""
        for (let index = 0; index < nomes.length; index++) {
            dadosDoHeroi = response.data[nomes[index]]
            // console.log(dadosDoHeroi.id)

            accumulator += `<div class="hero_box">
                                <img id="heroi_imagem" src="https://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${dadosDoHeroi.id}.png" alt="${dadosDoHeroi.id}" />
                                <span>${dadosDoHeroi.name}</span>  
                            </div>`
        }

        document.getElementById("campeoes").innerHTML = accumulator
        })  

        campeoess.addEventListener('click', (event) =>{
            
            console.log(event.target)
            historico = event.target.src;
            codigomapa = event.target.alt;
            historico.toString();

            console.log(codigomapa)
            avatar.style.backgroundImage = `url(${Texto(historico)})`;
            mapa.style.backgroundImage = `url(${Mapa(codigomapa)})`;
            box.style.backgroundImage = `url(${Mapa(codigomapa)})`;
        })
}
fetchCampeoes()

