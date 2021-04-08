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
const fetchCampeoes = async () => {
    const urlCampeao  = `http://ddragon.leagueoflegends.com/cdn/11.7.1/data/pt_BR/champion.json`
    // const getCampeao = champion => `http://ddragon.leagueoflegends.com/cdn/11.7.1/data/pt_BR/champion/${champion}.json`;
    // const listaCampeao = []

    await fetch(urlCampeao)
    .then(response => response.json())
    .then(response =>{ 
        nomes = Object.keys(response.data)
        accumulator = ""
        for (let index = 0; index < nomes.length; index++) {
            dadosDoHeroi = response.data[nomes[index]]
            console.log(dadosDoHeroi)  

            accumulator += `<div class="hero_box">
                                <img src="http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/${dadosDoHeroi.id}.png" />
                                <span>${dadosDoHeroi.name}</span> 
                            </div>`
     
        }
        document.getElementById("campeoes").innerHTML = accumulator
    })
}

fetchCampeoes()





// const mapa = document.querySelector('.mapa');
// const selecao = document.querySelector('.box-selecao')
