// Importações Firebase
import { db } from "./firebase.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

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
    window.location.href = "../paginas/usuarios.html";
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
    window.location.href = "../paginas/usuarios.html";
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
  window.location.href = "../paginas/usuarios.html";
});

carregarDados();
