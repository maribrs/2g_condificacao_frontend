document.querySelector(".botão").addEventListener("click", 
function(){

    const paragrafo = document.querySelector(".paragrafo")
    paragrafo.innerHTML = "voce clicou no botão"
    paragrafo.style.color = "green"
})