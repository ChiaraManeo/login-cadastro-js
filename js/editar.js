// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHKI9AmjtLB1Kj2I11E2wsFuECwXx8Nu0",
  authDomain: "meu-app-3f6c8.firebaseapp.com",
  projectId: "meu-app-3f6c8",
  storageBucket: "meu-app-3f6c8.firebasestorage.app",
  messagingSenderId: "132012104556",
  appId: "1:132012104556:web:e8341c1f885ca00585f149",
  measurementId: "G-CHEYT800E7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obter ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Referências aos campos
const nomeInput = document.getElementById("nome");
const usuarioInput = document.getElementById("usuario");
const emailInput = document.getElementById("email");

// Carrega os dados atuais
async function carregarDados() {
  if (!id) {
    alert("ID do usuário não encontrado.");
    window.location.href = "usuarios.html";
    return;
  }

  const docRef = doc(db, "usuarios", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const dados = docSnap.data();
    nomeInput.value = dados.nome;
    usuarioInput.value = dados.usuario;
    emailInput.value = dados.email;
  } else {
    alert("Usuário não encontrado.");
    window.location.href = "usuarios.html";
  }
}

// Salvar alterações
document.getElementById("formEditar").addEventListener("submit", async (e) => {
  e.preventDefault();

  const docRef = doc(db, "usuarios", id);
  await updateDoc(docRef, {
    nome: nomeInput.value,
    usuario: usuarioInput.value,
    email: emailInput.value
  });

  alert("Usuário atualizado com sucesso!");
  window.location.href = "usuarios.html";
});

carregarDados();
