export function checkTodoEmpty(title) {
    let isTodoEmpty = false;
    if (title === '') {
        window.alert("タイトルが入力されていません。");
        isTodoEmpty = true;
        return isTodoEmpty;
    }

    return isTodoEmpty;
}