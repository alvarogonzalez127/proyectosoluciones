import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBsDT-puVu1Zz4Hd_rGSIRlQ3cE7Jl5jJ0",
  authDomain: "servipc-f0f11.firebaseapp.com",
  databaseURL: "https://servipc-f0f11-default-rtdb.firebaseio.com",
  projectId: "servipc-f0f11",
  storageBucket: "servipc-f0f11.appspot.com",
  messagingSenderId: "360379427182",
  appId: "1:360379427182:web:b4c2e677e1d41b7b76f97f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
/**
 * Save a New Task in Firestore
 * @param {string} nombre el nombre del cliente
 * @param {string} correo el correo del cliente
 * @param {number} telefono el telefono del cliente
 * @param {string} comentarios comentarios del cliente
 */

export const saveTask = (nombre, correo, telefono, comentarios) =>
  addDoc(collection(db, "clientes"), { nombre, correo, telefono, comentarios })


export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "clientes"), callback);

/**
 * @param {string} id ID cliente
 */

export const deleteTask = (id) => deleteDoc(doc(db, "clientes", id));

export const getTask = (id) => getDoc(doc(db, "clientes", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "clientes", id), newFields);

export const getTasks = () => getDocs(collection(db, "clientes"));