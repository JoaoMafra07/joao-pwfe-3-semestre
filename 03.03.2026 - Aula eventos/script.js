// 1 - Contador - Um botão que some(+1) toda vez que é clicado
const counterBtn = document.querySelector(".counter-button")

function btCount(e) {
    let content = counterBtn.innerText
    let num = Number(content.replace("+ ", ""))
    num = num + 1
    counterBtn.innerText = ("+ " + num)
}

counterBtn.addEventListener("click", btCount)
// 2 - Mini card - uma imagem, nome, texto. Crie botão para mudar o fundo só do card
const changerBtn = document.querySelector('.changer-button');
const card = document.querySelector('.card');

function random(number) { // número aleatório dentro de um limite
    return Math.floor(Math.random() * (number + 1));
}

function btChange(e) {
    let color =
        "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    //rgb(255, 255, 255)
    card.style.background = color;
}

changerBtn.addEventListener("click", btChange);

// 3 - Mostra texto. Cria barra de texto. Conforme o usuário escreva na barra o texto aparece em baixo em um hx
const input = document.querySelector('input');
const textoInputado = document.querySelector('.texto-inputado')

function textInput(e) {
    let value = input.value
    textoInputado.innerText=(value)
}

input.addEventListener("keypress", textInput)
input.addEventListener("")