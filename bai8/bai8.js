function amDuong() {
    let num = document.getElementById('input').value;

    if (num < 0) {
        document.getElementById('result').innerHTML = 'Đây là số âm';
    }

    if (num > 0) {
        document.getElementById('result').innerHTML = 'Đây là số dương';
    }


}
