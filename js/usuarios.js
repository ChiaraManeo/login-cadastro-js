// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getFirestore, collection, getDocs, deleteDoc,doc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHKI9AmjtLB1Kj2I11E2wsFuECwXx8Nu0",
  authDomain: "meu-app-3f6c8.firebaseapp.com",
  projectId: "meu-app-3f6c8",
  storageBucket: "meu-app-3f6c8.firebasestorage.app",
  messagingSenderId: "132012104556",
  appId: "1:132012104556:web:e8341c1f885ca00585f149",
  measurementId: "G-CHEYT800E7"
};

// Inicializar Firebase e Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Buscar dados da coleção "usuarios"
const tabela = document.getElementById("tabelaUsuarios").getElementsByTagName("tbody")[0];

async function carregarUsuarios() {
  const querySnapshot = await getDocs(collection(db, "usuarios"));

  querySnapshot.forEach((doc) => {
    const dados = doc.data();

    const linha = tabela.insertRow();
    linha.insertCell(0).textContent = dados.nome;
    linha.insertCell(1).textContent = dados.usuario;
    linha.insertCell(2).textContent = dados.email;
  });
}

carregarUsuarios();

// Proteção por senha simples
const senha = prompt("Digite a senha para acessar a lista:");
if (senha !== "admin") {
  alert("Acesso negado!");
  window.location.href = "index.html"; // redireciona para a página de login ou outra
}

