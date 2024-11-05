document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const ano = document.getElementById('ano').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    if (nome && sobrenome && dia && mes && ano && genero && email && senha) {
        alert("Cadastro realizado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
  });