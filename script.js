document.getElementById("form").addEventListener("submit", function(e) {
    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Email inválido");
        e.preventDefault();
    }
});