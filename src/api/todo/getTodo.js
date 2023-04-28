import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.19.0/firebase-firestore.js';
import { initializeFirebaseApp } from '/src/api/initializeFirebaseApp.js';
import { Todo } from '/src/domain/Todo.js';

export async function getTodo() {

    const app = await initializeFirebaseApp();
    const db = getFirestore(app);
    const querySnap = await getDocs(collection(db, 'todo'));
    const todoLists = [];
    querySnap.forEach((doc) => {
        const data = doc.data();
        todoLists.push(new Todo(doc.id, data.title, data.status));
    });
    return todoLists;
}