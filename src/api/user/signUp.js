import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';

// Firebase Authentication にサインアップするための関数
export async function signUp(user) {
    const app = await initializeFirebaseApp();
    const auth = getAuth(app);
    return await createUserWithEmailAndPassword(auth, user.getEmail(), user.getPassword())
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