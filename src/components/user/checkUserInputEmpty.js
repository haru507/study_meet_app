export function checkUserInputEmpty(email, password) {
    let isUserEmpty = false;
    if (email === "" && password === "") {
        window.alert("メールアドレスとパスワードを入力してください。");
        isUserEmpty = true;
        return isUserEmpty;
    }

    if (email === "") {
        window.alert("メールアドレスを入力してください。");
        isUserEmpty = true;
    }

    if (password === "") {
        window.alert("パスワードを入力してください。");
        isUserEmpty = true;
    }

    return isUserEmpty;
}