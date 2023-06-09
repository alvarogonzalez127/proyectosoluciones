import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const logout = document.querySelector("#Salir");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    console.log("signup out");
    showMessage("Adios " + credentials.user.displayName);
  } catch (error) {
    console.log(error)
  }
});