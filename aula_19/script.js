function pegaDados(){
    const nome = document.querySelector("#Nome")
    const sobrenome = document.querySelector("#Sobrenome")
    const idade = document.querySelector("#Idade")
    const resultado = document.querySelector(".resultado")
    const erro = document.querySelector(".erro")

    const nomevalor = nome.value;
    const sobrenomevalor = sobrenome.value;
    const idadevalor = Number(idade.value);

    if(nomevalor === ""){
      erro.textContent = "o campo não pode estar vazio"
      nome.style.borderColor = "red"
      return;
    }
    if(idadevalor < 0){
        document.querySelector(".erro-idade").textContent = "campo obrigatorio"
        idade.style.borderColor = "red"
        return;
      }  
      if(idadevalor < 0){
        document.querySelector(".erro-idade").textContent = "não pode ser menos que zero"
        idade.style.borderColor = "red"
        return;
      }
      
    
    resultado.innerHTML = `<p>Nome: ${nomevalor}</p>
                           <p>sobrenome: ${sobrenomevalor}</p>
                           <p>idade: ${idadevalor}</p>`;
    console.log(nomevalor)
    
}