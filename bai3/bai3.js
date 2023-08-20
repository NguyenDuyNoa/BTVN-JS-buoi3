function xuatTuDaiNhat() {
    let text = document.getElementById('content');
    let arr = text.textContent.split(' ');
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    document.getElementById('result').innerText = max;
}