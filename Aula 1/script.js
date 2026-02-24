// var a = 1;
// let b = 2;
// const c = 3;

// console.log(a + 1);
// console.log(b + 1);
// console.log(c + 1);

// console.log(confirm("Você é humano?")) // Confirm serve para retornar um valor booleano
// const nome = prompt("Qual seu nome?"); // Caixa que espera uma resposta do usuário informando algum contexto
// alert("Boas vindas, "+ nome); // É um aviso que o site dá ao usuário

// let maior = 18;
// if (maior > 19) console.log("Maior!")
// else console.log("Menor!")

// respostaPreparado = confirm("Está preparado para o terceiro semestre de Desenvolvimento de Sistemas?")

// if (respostaPreparado) {
//     alert("É isso aí, vamos nessa!")
// } else {
//     alert("Não se preocupe, vai dar tudo certo!")
// }

// let cor = prompt("Cor favorita")

// switch (cor) {
//     case "preto":
//         console.log("Você é a Kuromi");
//         break;
//     case "pink":
//         console.log("Você é a my melody");
//         break;
//     case "rosa":
//         console.log("Você é a hello kitty");
//         break;
//     case "amarelo":
//         console.log("Você é o Naruto");
//         break;
//     default:
//         console.log("Cor inválida");
// }

let isBirthday = confirm("É niver da Kuromi?");

isBirthday ? console.log("Feliz aniversário") : "";

// let cats = ["Kuromi", "Kitty", "Purim", "Roll", "Retsuko"];
// let info = "My cats are called: ";

// for (let i = 0; i < cats.length; i++){
//     i != cats.length-1 ? info += cats[i] + ", " : info += "and " + cats[i] + ".";
// }

// console.log(info);

let cats = ["Kuromi", "Kitty", "Purim", "Roll", "Retsuko"];
let info = "My cats are called: ";

let i = 0;

while (i < cats.length){
    if (i === cats.length-1){
        info += "and " + cats[i] + ".";
    }else{
        info += cats[i] + ", ";
    }

    i++
}

console.log(info);

// function soma(n1, n2){
//     return n1 + n2
// }

// let som = soma(5, 6);

// console.log(som)

// let som = function (n1, n2){
//     return n1+n2
// }

// console.log(som(3, 4))

let som = (n1, n2) => {
    return n1 + n2;
}

console.log(som(6,8))


// ========================= EX 1 =============================

// const nome = prompt("Qual seu nome?");
// console.log(nome);
// alert("Boas vindas, "+ nome);

// ========================= EX 2 =============================

// const materia = prompt("Qual sua matéria favorita?");
// console.log(materia);
// alert(`A matéria ${materia} realmente é ótima!`);

// ========================= EX 3 =============================

// respostaData = prompt("Por favor, informe a data de hoje");
// let dataAtual = new Date().toLocaleDateString('pt-BR');

// if (dataAtual == respostaData) {
//     alert("Parabéns, acertou")
// } else {
//     alert("Vishhh, erooooooou")
// };

// ========================= EX 4 =============================

// respostaPreparado = confirm("Está preparado para o terceiro semestre de Desenvolvimento de Sistemas?")

// if (respostaPreparado) {
//     alert("É isso aí, vamos nessa!")
// } else {
//     alert("Não se preocupe, vai dar tudo certo!")
// }

// ========================= EX 5 =============================

// num1 = Number(prompt("Digite o primeiro número"))
// num2 = Number(prompt("Digite o segundo número"))

// alert(`A soma dos dois: ${num1 + num2}\nA subtração dos dois: ${num1 - num2}\nA multiplicação dos dois: ${num1 * num2}\nA divisão dos dois: ${num1 / num2}`)

// ========================= EX 6 =============================
// nota1 = Number(prompt("Digite a primeira nota"))
// nota2 = Number(prompt("Digite a segunda nota"))
// nota3 = Number(prompt("Digite a terceira nota"))

// alert(`A sua média foi: ${(nota1 + nota2 + nota3)/3}`)

// ========================= EX 7 =============================
// largura = Number(prompt("Digite a largura da parede"))
// altura = Number(prompt("Digite a altura da parede"))

// alert(`A quantidade necessária de tinta será: ${largura*altura/2}`)


