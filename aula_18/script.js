const botaoadicionar = document.querySelector(".btn-adicionar")
const botaoremove = document.querySelector(".btn-remover")
const botaoalterar = document.querySelector(".btn-alterar")
const caixa = document.querySelector(".caixa")

botaoadicionar.addEventListener("click", () => {
    caixa.classList.add("vermelho")
})
botaoremove.addEventListener("click", () => {
    caixa.classList.remove("vermelho")
})
botaoalterar.addEventListener("click", () => {
    caixa.classList.toggle("rosa")
})
