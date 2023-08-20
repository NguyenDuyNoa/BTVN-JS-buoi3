function tamGiac() {
    let num = document.getElementById('input').value;
    let arr = [];

    for (let i = 1; i <= num; i++) {
        let stars = '*'.repeat(i);
        arr.push(stars);
    }

    let resultHTML = arr.join("<br>");
    document.getElementById('result').innerHTML = resultHTML;
}
