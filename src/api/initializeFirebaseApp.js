// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.0/firebase-app.js";

// 仮のURL
const pass = 'http://127.0.0.1:5500';
let app = null;

// Firestoreをインスタンス化する関数
export function initializeFirebaseApp() {
    if (app !== null) {
        return Promise.resolve(app);
    }

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            const responseText = xhr.responseText;
            const jsonResponse = JSON.parse(responseText);

            app = initializeApp(jsonResponse);
            resolve(app);
        });

        xhr.addEventListener('error', () => {
            reject(xhr.statusText);
        });

        xhr.open('GET', `${pass}/src/api/config.json`);
        xhr.send();
    });
}
