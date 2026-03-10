// let lista1 = ["João", "Kaique", "Thomás", "Gabi", "Rayane", "Julias"];
// let lista2= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// for (let indice in lista1) {
//     console.log(indice) // Para ver os índices de cada elemento
//     console.log(lista1[indice]) // Gambiarra para ver o elemento capturando índice
// }

// for (let item of lista1) {
//     console.log(item) // Jeito "certo" de acessar o item, usando of no let ao invés do in
// }

// let frase = "Meus alunos: "
// lista1.forEach(function(item) {
//     frase += item + ", "
// })

// // let frase = "Meus alunos: "

// lista1.forEach((item) => frase += item + ", ")

// console.log(frase);

// lista1[6] = "Dienifer"
// console.log(lista1)

// lista1.push("Dienifer"); // Coloca no fim da lista
// lista1.unshift("Nicolas"); // Coloca no início da lista

// console.log(lista1)

// let a = lista1.pop() // Remove o último elemento
// a = lista1.shift() // Remove o primeiro elemento

// console.log(lista1)

// console.log(lista1)
// let retirados = lista1.splice(3,2); // A partir do index TRÊS, vai remover DOIS elementos
// console.log(lista1)
// console.log(retirados)

// console.log(lista1)
// let retirados = lista1.slice(3,5); // O primeiro valor é o index que começa, e o 5 é onde termina
// // Para usar SLICE, é OBRIGATÓRIO atribuir os valores retirados a uma variável, já que a função dele é de cópia
// console.log(retirados)
// console.log(lista1)

// =============== MAP ===============

// let b = lista2.map(function(n) {
//     return n*2
// })

// console.log(b)

// let b = lista2.map(n => n*2)

// console.log(b)

// let nomesMaiusculos = lista1.map(function(nome) {
//     return nome.toUpperCase();
// });

// console.log(nomesMaiusculos)

// let nomesMinusculos = lista1.map(function(nome) {
//     return nome.toLowerCase();
// });

// console.log(nomesMinusculos)

// =============== FILTER ===============

// console.log(lista2)
// let c = lista2.filter(function(n){
    //     return n % 2 === 0;
    // });
    // console.log(c);
    
// =============== DESESTRUTURAÇÃO ===============
// let [a1, a2, a3] = lista1;

// console.log(a1, a2, a3)

// =============== SPREAD ===============
// let l = lista1 + lista2
// console.log(l) // Vira uma string com todos os elementos separados por vírgula

// let m = [...lista1, ...lista2] // Estou usando o Spread AQUI
// console.log(m) // Vira uma lista com os elementos das duas listas

// let n = [lista1, lista2]
// console.log(n) // Vira uma matriz

// =========================== EXERCÍCIOS ===========================

// =============== EXERCÍCIO 1 ===============
// Desenvolva um programa que a partir de um vetor de inteiros com 5 valores inicializados na declaração apresente o dobro de cada valor armazenado.

// alert("Você está no exercício 1")

// let vet = [5, 10, 15, 20, 25]

// let dobro = vet.map(n => n*2)
// console.log(dobro)

// =============== EXERCÍCIO 2 ===============
// Desenvolva um programa que a partir de um vetor de inteiros com 8 valores inicializados na declaração apresente a média aritméticas desses valores.

// alert("Você está no exercício 2")

// let vet = [4, 7, 8, 3, 6, 4, 10, 2]

// soma = 0
// vet.forEach((num) => soma += num)

// media = soma/vet.length
// console.log(`Média dos números ${media}`)

// =============== EXERCÍCIO 3 ===============
// Desenvolva um programa que leia a idade de 20 pessoas e apresente as idades acima da média.

// alert("Você está no exercício 3")

// let vet = [18, 25, 14, 36, 54, 16, 15, 34, 21, 24, 18, 31, 25, 18, 19, 42, 10, 8, 28, 14]

// console.log(vet)
// soma = 0
// vet.forEach((num) => soma += num)

// media = soma/vet.length
// console.log(media)
// let acima_media = []
// vet.forEach((num) => num > media ? acima_media.push(num) : "" )
// console.log(acima_media)

// =============== EXERCÍCIO 4 ===============
// Desenvolva um programa que leia 10 números e apresente os valores pares. Caso não tenha nenhum número par apresente a mensagem “Todos os números são ímpares.”

// alert("Você está no exercício 4")

// let vet = [7, 42, 19, 3, 88, 56, 14, 73, 25, 61]

// console.log(vet)

// let eh_par = []
// vet.forEach((num) => num % 2 === 0 ? eh_par.push(num) : "" )
// eh_par.length != 0 ? console.log(eh_par) : console.log("Todos os números são ímpares")

// =============== EXERCÍCIO 5 ===============
// Desenvolva um programa que leia 8 números garantindo que os valores informados estejam entre 100 e 200 (caso não esteja apresente uma mensagem de “valor inválido”). Depois de preenchido apresente os valores armazenados.
// alert("Você está no exercício 5")

// let i = 0
// alert("Você deverá digitar 8 números entre 100 e 200")
// let vet = []

// for (i = 0; i < 8; i++) {
//     let num = Number(prompt(`Digite o ${i+1}º número`))
//     while (num < 100 || num > 200 ) {
//         num = Number(prompt(`Valor inválido! Digite o ${i+1}º número`))        
//     }
//     vet.push(num)
// };

// console.log(vet)