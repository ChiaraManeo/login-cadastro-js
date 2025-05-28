// Importa Firebase centralizado
import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Executar o envio do formulário
document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirma = document.getElementById("confirmarSenha").value;

    if (senha !== confirma) {
        alert("As senhas não coincidem.");
        return;
    }

    try {
        const credenciais = await createUserWithEmailAndPassword(auth, email, senha);
        const user = credenciais.user;

        // Salvar dados adicionais no Firestore
        await addDoc(collection(db, "usuarios"), {
            uid: user.uid,
            nome: nome,
            usuario: usuario,
            email: email
        });

        alert("Usuário cadastrado com sucesso!");
        window.location.href = "../index.html";
    } catch (err) {
        alert("Erro ao cadastrar: " + err.message);
    }
});

// Olhinho para senha
const senhaInput = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");
toggleSenha.addEventListener("click", () => {
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
    toggleSenha.classList.toggle("fa-eye");
    toggleSenha.classList.toggle("fa-eye-slash");
});

// Olhinho para confirmar senha
const confirmaInput = document.getElementById("confirmarSenha");
const toggleConfirma = document.getElementById("toggleConfirmarSenha");
toggleConfirma.addEventListener("click", () => {
    const tipo = confirmaInput.type === "password" ? "text" : "password";
    confirmaInput.type = tipo;
    toggleConfirma.classList.toggle("fa-eye");
    toggleConfirma.classList.toggle("fa-eye-slash");
});
