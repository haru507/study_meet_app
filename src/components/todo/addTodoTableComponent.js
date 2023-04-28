import { deleteTodo } from '/src/api/todo/deleteTodo.js';
import { updateTodo } from '/src/api/todo/updateTodo.js';

export function addTodoTableComponent(todoLists) {
    const todoListTableBody = document.getElementById("todo-list");
    todoLists.forEach((todo, index) => {
        const newRow = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = todo.title;
        newRow.appendChild(titleCell);

        const statusCell = document.createElement("td");
        const status = todo.status ? "未着手" : "完了";
        statusCell.textContent = status;
        newRow.appendChild(statusCell);

        const checkboxCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = status === "完了";
        checkbox.addEventListener("change", () => {
            todoLists[index].status = checkbox.checked ? "完了" : "未着手";
            updateTodo(todoLists[index])
                .then(() => {
                    statusCell.textContent = todoLists[index].status;
                })
        });
        checkboxCell.appendChild(checkbox);
        newRow.appendChild(checkboxCell);

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.id = todo.id;
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", (e) => {
            // todoListsから該当するtodoを削除する処理
            const deleteTodoId = e.target.id;
            deleteTodo(deleteTodoId)
                .then(() => {
                    newRow.remove();
                })
        });
        deleteCell.appendChild(deleteButton);
        newRow.appendChild(deleteCell);

        todoListTableBody.appendChild(newRow);
    });
}