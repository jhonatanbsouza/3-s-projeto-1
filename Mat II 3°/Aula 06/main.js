const botoes = document.querySelectorAll('.botao');
const conteudo = document.querySelectorAll('.aba-conteudo');
const contadores = document.querySelectorAll('.contador')
contadores[0].textContent = "Contagem regressiva"
const tempoObjetivo1 = new Date("2024-05-05T00:00:00")
contadores[0].textContent = tempoObjetivo1;
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual; /*tempo em milisegundos*/
let tempoFinal = tempoObjetivo1 - tempoAtual;
function calculaTempo(tempoFinalObjetivo){
    let segundos = Math.floor(tempoFinalObjetivo/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    horas %= 24;
    minutos %= 60;
    segundos %= 60;
    contadores[0].textContent = `Falta ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
calculaTempo(tempoFinal)
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }

        botoes[i].classList.add("ativo");
        conteudo[i].classList.add("ativo");
    }
}

/*
A função avalia o evento "onclick";
Ao clicar, ela apaga TODOS os ativos e depois coloca o ativo no clicado
*/