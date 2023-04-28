// 前のページに戻る(共通処理)
const prevButton = document.getElementById("prevButton");
if (prevButton) {
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
    });
}