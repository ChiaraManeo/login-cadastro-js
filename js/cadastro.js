document.getElementById("cadastroForm").addEventListener("submit", function (evento) {
    evento.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmarSenha").value;

    if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "test.html";
});

// Mostrar ou esconder a senha principal
const senhaInput = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");

toggleSenha.addEventListener("click", function () {
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
    toggleSenha.classList.toggle("fa-eye");
    toggleSenha.classList.toggle("fa-eye-slash");
});

// Mostrar ou esconder a senha de confirmação
const confirmarInput = document.getElementById("confirmarSenha");
const toggleConfirmar = document.getElementById("toggleConfirmarSenha");

toggleConfirmar.addEventListener("click", function () {
    const tipo = confirmarInput.type === "password" ? "text" : "password";
    confirmarInput.type = tipo;
    toggleConfirmar.classList.toggle("fa-eye");
    toggleConfirmar.classList.toggle("fa-eye-slash");
});
