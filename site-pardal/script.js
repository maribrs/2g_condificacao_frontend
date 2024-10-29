const btn = document.querySelector(".btn")
const mensagem = document.querySelector(".mensagem")
 btn.addEventListener("click", (event) => {
    event.preventDefault();
    const velocidade = document.querySelector(".velocidade").value
    const limite = 60

    if(velocidade === ""){
        mensagem.textContent = "O campo não pode ficar vazio!"
        document.body.style.backgroundColor = "white"
        return
    }
    if (velocidade > limite) {
        document.body.style.backgroundColor = "red"
        mensagem.textContent = "você ultrapassou o limite de velocidade, você que se matar?"
    }else{
        document.body.style.backgroundColor = "green"
        mensagem.textContent = "parabéns, você não matou ninguem"
   
    }
 })
