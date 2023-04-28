import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';

// Firebase Authentication にサインインするための関数
export async function signIn(user) {
    const app = await initializeFirebaseApp();
    const auth = getAuth(app);
    return await signInWithEmailAndPassword(auth, user.getEmail(), user.getPassword())
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            return true;
        })
        .catch((error) => {
            console.log(error);
            return false;
        });
}