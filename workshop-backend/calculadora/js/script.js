var valorFinal = document.querySelector(".secao-hora .secao__rodape__valor span");
var inputGanhoMes = document.querySelector("#ganho-mes");
var inputGanhoHoras = document.querySelector("#horas-dia");

function calcularValorHora(){
    var calculoHoraMes = inputGanhoHoras.valueAsNumber * 21;
    var valorDaHora = (inputGanhoMes.valueAsNumber / calculoHoraMes).toFixed(2);
    valorFinal.textContent = 'R$' + valorDaHora;
}


