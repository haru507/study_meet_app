import { getFirestore, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js';
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';

export const deleteTodo = async (todoId) => {
    try {
        const app = await initializeFirebaseApp();
        const db = getFirestore(app);
        await deleteDoc(doc(db, "todo", todoId));
    } catch (error) {
        console.error("Error adding todoDocument: ", error);
    }
}