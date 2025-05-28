// Importações Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

// Configurações do seu projeto
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
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar para outros arquivos
export { auth, db };
