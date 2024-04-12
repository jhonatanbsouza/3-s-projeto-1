const botoes = document.querySelectorAll('.botao');
const conteudo = document.querySelectorAll('.aba-conteudo');


for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }

        botoes[i].classList.add("ativo");
        conteudo[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll('.contador')
// contadores[0].textContent = "Contagem regressiva"
const tempoObjetivo1 = new Date("2024-05-05T00:00:00")
const tempoObjetivo2 = new Date("2024-07-05T00:00:00")
const tempoObjetivo3 = new Date("2024-12-05T00:00:00")
const tempoObjetivo4 = new Date("2024-01-05T00:00:00")
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    horas %= 24;
    minutos %= 60;
    segundos %= 60;
    if (tempoFinal > 0 ){
    return `Faltam ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }
    else{
        return `Prazo finalizado!`
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

// comecaCronometro();

/*
A função avalia o evento "onclick";
Ao clicar, ela apaga TODOS os ativos e depois coloca o ativo no clicado
*/