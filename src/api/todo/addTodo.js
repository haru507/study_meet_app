import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js';
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';

export const addTodo = async (todo) => {
    try {
        const app = await initializeFirebaseApp();
        const db = getFirestore(app);
        const todoCollection = collection(db, "todo");
        const docRef = await addDoc(todoCollection, todo.getJson());
    } catch (error) {
        console.error("Error adding todoDocument: ", error);
    }
}