function sapXep() {
    let text = document.getElementById('input').value;
    let sort = text.split('').sort().join('');
    document.getElementById('result').innerText = sort;
}