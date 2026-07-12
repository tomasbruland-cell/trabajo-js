let altura = parseFloat(prompt("Ingrese su altura"));
let peso = parseFloat(prompt("Ingrese su peso"));
let nombre = prompt("¿Cómo te llamas?");
console.log(altura);
console.log(peso);
let imc = peso / (altura * altura);
console.log(nombre + ", tu IMC es: " + imc.toFixed(2));
