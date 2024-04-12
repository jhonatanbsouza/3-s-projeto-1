const botoes = document.querySelectorAll('.botao');
const conteudo = document.querySelectorAll('.aba-conteudo');
const contadores = document.querySelectorAll('.contador')
contadores[0].textContent = "Contagem regressiva"
const tempoObjetivo1 = new Date("2024-05-05T00:00:00")
contadores[0].textContent = tempoObjetivo1;
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual; /*tempo em milisegundos*/

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