import { getFirestore, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js';
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';

export const updateTodo = async (todo) => {
    try {
        const app = await initializeFirebaseApp();
        const db = getFirestore(app);
        const todoRef = doc(db, "todo", todo.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(todoRef, todo.getJson());
    } catch (error) {
        console.error("Error adding todoDocument: ", error);
    }
}