// Importa as funções de autenticação *no próprio módulo*
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Usa a instância de auth que expusemos no window
const auth = window.firebaseAuth;

// Lógica de login
document.getElementById("loginForm")
  .addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (!email || !senha) {
      alert("Preencha todos os campos.");
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert("Login realizado com sucesso!");
        window.location.href = "../paginas/pagina.html";
      })
      .catch(err => {
        alert("Erro no login: " + err.message);
      });
  });

// Mostrar / esconder senha
const senhaInput    = document.getElementById("senha");
const toggleSenhaEl = document.getElementById("toggleSenha");

toggleSenhaEl.addEventListener("click", () => {
  const tipo = senhaInput.type === "password" ? "text" : "password";
  senhaInput.type = tipo;
  toggleSenhaEl.classList.toggle("fa-eye");
  toggleSenhaEl.classList.toggle("fa-eye-slash");
});

// Botão de cadastro
document.getElementById("botaoCadastro")
  .addEventListener("click", () => {
    window.location.href = "../paginas/cadastro.html";
  });
