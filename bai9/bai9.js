function demChu() {
    let text1 = document.getElementById('input1').value;
    let text2 = document.getElementById('input2').value;

    let arr = text1.split('');
    
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === text2) {
            count++;
        }
    }

    document.getElementById('result').innerHTML = count + " lần xuất hiện"
}
