import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const adminLoginForm = document.querySelector("#adminLoginForm");
const adminLoginButton = document.querySelector("#adminLoginButton");

adminLoginButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = adminLoginForm.querySelector("#admin-email").value;
  const password = adminLoginForm.querySelector("#admin-password").value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);

    // Cerrar el modal de inicio de sesión
    const modal = bootstrap.Modal.getInstance(adminLoginForm.closest('.modal'));
    modal.hide();

    // Reiniciar el formulario
    adminLoginForm.reset();

    // Mostrar mensaje de bienvenida
    showMessage("¡Bienvenido!");
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Contraseña incorrecta", "error");
    } else if (error.code === 'auth/user-not-found') {
      showMessage("El usuario no existe", "error");
    } else {
      showMessage("Algo ha salido mal", "error");
    }
  }
});






























/*
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const adminUsernameInput = document.getElementById('admin-username');
const adminPasswordInput = document.getElementById('admin-password');
const adminLogin = document.getElementById('adminLoginForm');

adminLogin.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signInForm["login-email"].value;
    const password = signInForm["login-password"].value;
  
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredentials)
  
      // Close the login modal
      const modal = bootstrap.Modal.getInstance(signInForm.closest('.modal'));
      modal.hide();
  
      // reset the form
      signInForm.reset();
  
      // show welcome message
      showMessage("Bienvenido " + userCredentials.user.email);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        showMessage("Contraseña incorrecta ", "error")
      } else if (error.code === 'auth/user-not-found') {
        showMessage("El usuario no existe ", "error")
      } else {
        showMessage("Algo ha salido mal ", "error")
      }
    }
  });
  */
