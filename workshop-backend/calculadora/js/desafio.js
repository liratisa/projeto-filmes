var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");

function calcular(){
  var calculo = (inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber).toFixed(2);
  alert("O valor total do seu projeto é igual a R$" + calculo);
}
