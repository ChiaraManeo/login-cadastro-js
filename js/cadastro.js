// 1) Importar apenas o que precisamos
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// 2) Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDHKI9AmjtLB1Kj2I11E2wsFuECwXx8Nu0",
    authDomain: "meu-app-3f6c8.firebaseapp.com",
    projectId: "meu-app-3f6c8",
    storageBucket: "meu-app-3f6c8.firebasestorage.app",
    messagingSenderId: "132012104556",
    appId: "1:132012104556:web:e8341c1f885ca00585f149",
    measurementId: "G-CHEYT800E7"
};

// 3) Inicializar Firebase e obter Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4) Escutar o envio do formulário de cadastro
document.getElementById("cadastroForm")
    .addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirma = document.getElementById("confirmarSenha").value;

        if (senha !== confirma) {
            alert("As senhas não coincidem.");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "index.html"; // volta ao login
        } catch (err) {
            alert("Erro ao cadastrar: " + err.message);
        }
    });

// 5) Olhinho para senha principal
const senhaInput = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");
toggleSenha.addEventListener("click", () => {
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
    toggleSenha.classList.toggle("fa-eye");
    toggleSenha.classList.toggle("fa-eye-slash");
});

// 6) Olhinho para confirmação de senha
const confirmaInput = document.getElementById("confirmarSenha");
const toggleConfirma = document.getElementById("toggleConfirmarSenha");
toggleConfirma.addEventListener("click", () => {
    const tipo = confirmaInput.type === "password" ? "text" : "password";
    confirmaInput.type = tipo;
    toggleConfirma.classList.toggle("fa-eye");
    toggleConfirma.classList.toggle("fa-eye-slash");
});
