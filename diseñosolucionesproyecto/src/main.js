import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";

import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/logout.js'
import './app/adminForm.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user);
    try {
      const querySnapshot = await getDocs(collection(db, "clientes"));
      setupClientes(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    setupClientes([]);
    loginCheck(user);
  }
});