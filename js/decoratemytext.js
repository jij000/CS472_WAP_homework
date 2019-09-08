window.onload = function () {
    let btnClick = function () {
        // alert("Hello, world!");
        let size = 0;
        if (document.getElementById('text').style.fontSize == '') {
            size = 12;
        } else {
            size = parseInt(document.getElementById('text').style.fontSize);
        }
        document.getElementById('text').style.fontSize = size + 2 + 'px';
    };
    document.getElementById('btn').onclick = btnClick;
    document.getElementById('check').onchange = function () {
        // alert("Hello, world!");
        if (document.getElementById('check').checked) {
            document.getElementById('text').style.fontWeight = 'bold';
            document.getElementById('text').style.color = 'green';
            document.getElementById('text').style.textDecoration = 'underline';
            document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
        } else {
            document.getElementById('text').style.fontWeight = 'normal';
            document.getElementById('text').style.color = '';
            document.getElementById('text').style.textDecoration = '';
            document.body.style.backgroundImage = '';
        }
    };
    // setInterval (btnClick, 500);
    document.getElementById('btni').onclick = function () {
        if (isVowel(document.getElementById('text').value.charAt(0))) {
            document.getElementById('text').value += 'ay';
        } else {
            let x = document.getElementById('text').value.charAt(0);
            document.getElementById('text').value = document.getElementById('text').value.substring(1) + x;
            document.getElementById('text').value += 'ay';
        }
    };
    document.getElementById('btnm').onclick = function () {
        let arr = document.getElementById('text').value.split(' ');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= 5) {
                arr[i] = 'Malkovich';
            }
        }
        document.getElementById('text').value = arr.join(' ');
    };
}

function isVowel(a) {
    if (a === "A" || a === "E" || a === "I" || a === "O" || a === "U" ||
        a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
        return true;
    }
    return false;
}