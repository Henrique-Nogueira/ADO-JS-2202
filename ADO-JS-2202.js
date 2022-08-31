let kg = parseFloat(prompt("Digite o seu peso em Kg"));
let altura= parseFloat(prompt("Digite a sua altura"));

let imc = kg / altura * altura

document.write("O seu IMC é: " + imc)