import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-auth.js";
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';

// Firebase Authentication のサインイン状態を監視する関数
export async function watchAuthState() {
    const app = await initializeFirebaseApp();
    const auth = getAuth(app);

    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                resolve(true);
            } else {
                resolve(false);
            }
        }, (error) => {
            reject(error);
        });
    });
}