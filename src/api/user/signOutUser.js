import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';

// Firebase Authentication からサインアウトするための関数
export async function signOutUser() {
    const app = await initializeFirebaseApp();
    const auth = getAuth(app);
    return await signOut(auth).then(() => {
        // Sign-out successful.
        location.href = "/index.html";
        return true;
    }).catch((error) => {
        console.log(error);
        return false;
    });
}