// Ex 1

// let num = Number(prompt("Digite um número"))

// let eh_par = (num) => {
//     let resto = Math.abs(num % 2)
    
//     switch (true) {
//         case resto === 0:
//             return "É par";
//         case resto === 1:
//             return "É ímpar";
//         default:
//             return "Não é um número inteiro";
//     }
// }

// let div_3_5 = (num) => {
//     let eh_por_3 = num % 3 
//     let eh_por_5 = num % 5

//     switch (true) {
//         case (eh_por_3 === 0 && eh_por_5 === 0):
//             return "É divisível por 3 e por 5";
//         case (eh_por_3 === 0):
//             return "É divisível apenas por 3";
//         case (eh_por_5 === 0):
//             return "É divisível apenas por 5";
//         default:
//             return "Não é divisível por 3 e nem por 5";
//     }
// }

// console.log(`${eh_par(num)} e ${div_3_5(num)}`
// )

// Ex 2
// let num1 = Number(prompt("Digite o primeiro número"))
// let num2 = Number(prompt("Digite o segundo número"))
// let num3 = Number(prompt("Digite o terceiro número"))

// let maior = Math.max(num1, num2, num3);
// console.log(`O maior número é ${maior}`)

// Ex 3
// let resposta = ""

// do {
//     resposta = prompt("Você vai digitar em Celcius ou Fahrenheit? (C/F)").toUpperCase();
// } while (resposta !== 'C' && resposta !== 'F');

// let valor = parseFloat(prompt("Digite a temperatura"))

// if (resposta== "C"){
//     let convertido = valor * 1.8 + 32
//     console.log(`${valor}°C = ${convertido}°F`)
// } else {
//     let convertido = (valor - 32) * (5/9)
//     console.log(`${valor}°F = ${convertido}°C`)
// }

// Ex 5
// let velocidade = Number(prompt("Digite a velocidade do carro"))

// if (velocidade <= 80) {
//     console.log("Está dentro do limite")
// } else {
//     let multa = (velocidade - 80)/5
//     console.log(`A multa é de R$${multa.toFixed(2)}`)
// }

// Ex 6
// let distancia = Number(prompt("Digite a distância que deseja percorrer"))

// if (distancia > 200){
//     console.log(`Preço a pagar: R$${(distancia*0.45).toFixed(2)}`)
// } else {
//     console.log(`Preço a pagar: R$${(distancia*0.5).toFixed(2)}`)
// }

// Ex 7
// let ano_nascimento = Number(prompt("Digite o ano em que nasceu"));

// let data_atual = new Date();
// let ano_atual = data_atual.getFullYear();

// (ano_atual - ano_nascimento) < 16 ? console.log("Não pode votar") : console.log("Pode votar");

// Ex 8
// let ano = Number(prompt("Digite um ano"))

// ano % 4 === 0 ? console.log("É bissexto") : console.log("Não é bissexto")

// Ex 9
// let idade = Number(prompt("Digite sua idade"))

// if (idade < 18) {
//     console.log(`Faltam ${18-idade} ano(s) para se alistar`)
// } else if (idade === 18) {
//     console.log("Você está com a idade de se alistar")
// } else {
//     console.log(`Já se passaram ${idade-18} ano(s) do alistamento`)
// }

// Ex 10
// let conta = Number(prompt("Digite o número da sua conta"))
// let saldo = Number(prompt("Digite o seu saldo"))
// let debito = Number(prompt("Digite o valor do débito"))
// let credito = Number(prompt("Digite o valor do crédito"))

// let saldo_atual = saldo - debito + credito

// console.log(`O saldo atual da conta ${conta} é R$${saldo_atual}.`)
// saldo_atual < 0 ? console.log("Saldo negativo") : console.log("Saldo positivo")