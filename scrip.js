const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const dadosFormulario = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("tel").value,
        mensagem: document.getElementById("mensagem").value
    };

    console.log(dadosFormulario);
    alert("Dados enviados!")
});