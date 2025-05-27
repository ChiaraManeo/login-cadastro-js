// Lógica do formulário de login
document.getElementById("loginForm").addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita o recarregamento da página

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    const bancoDeUsuarios = [
        { nome: "admin", senha: "1234" },
        { nome: "joana", senha: "banana123" },
        { nome: "lucas", senha: "senha@321" }
    ];

    const encontrado = bancoDeUsuarios.find(user => user.nome === usuario && user.senha === senha);

    if (usuario === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (encontrado) {
        alert("Bem-vindo, " + usuario + "!");
        window.location.href = "pagina.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Mostrar ou esconder a senha
const senhaInput = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");

toggleSenha.addEventListener("click", function () {
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleSenha.classList.remove("fa-eye");
        toggleSenha.classList.add("fa-eye-slash");
    } else {
        senhaInput.type = "password";
        toggleSenha.classList.remove("fa-eye-slash");
        toggleSenha.classList.add("fa-eye");
    }
});

// Botão Cadastro
document.getElementById("botaoCadastro").addEventListener("click", function() {
    window.location.href = "cadastro.html";
});

// Lógica do formulário de cadastro
const formCadastro = document.getElementById("cadastroForm");

if (formCadastro) {
    formCadastro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const novoUsuario = document.getElementById("novoUsuario").value;
        const novaSenha = document.getElementById("novaSenha").value;

        if (novoUsuario === "" || novaSenha === "") {
            alert("Preencha todos os campos.");
        } else {
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "index.html"; // Volta para login
        }
    });

}


