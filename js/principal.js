let titulo = document.querySelector(".titulo");

titulo.textContent = "Shellton Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdpeso = paciente.querySelector(".info-peso");
var peso = tdpeso.textContent;

var tdaltura = paciente.querySelector(".info-altura")
var altura = tdaltura.textContent;

var tdimc = paciente.querySelector(".info-imc");

var pesoevalido = true;
var alturaevalido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("peso invalido");
    pesoevalido = false;
    tdimc.textContent = "Peso invalido";
}

if (altura <= 0 || altura >= 3.0) {
    console.log("altura invalido");
    alturaevalido = false;
    tdimc.textContent = "Altura invalido";
}

if (pesoevalido && alturaevalido) {
    var imc = peso / (altura * altura);
    tdimc.textContent = imc;
}


