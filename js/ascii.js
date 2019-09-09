let fontSize = [];
fontSize['Tiny'] = '7pt';
fontSize['Small'] = '10pt';
fontSize['Medium'] = '12pt';
fontSize['Large'] = '16pt';
fontSize['Extra Large'] = '24pt';
fontSize['XXL'] = '32pt';

window.onload = function() {
    document.getElementById('animation').onchange = function() {
        document.getElementById('text-area').value = ANIMATIONS[this.value];
    }
    document.getElementById('fontsize').onchange = function() {
        // Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
        document.getElementById('text-area').style.fontSize = fontSize[this.value];
    }
    document.getElementById('turbo').onchange = function() {
        if (this.checked == '') {
            setInterval(playAscii, 250);
        } else {
            setInterval(playAscii, 50);
        }
    }
    document.getElementById('start').onclick = function() {
        this.disabled = 'disabled';
        document.getElementById('stop').disabled = '';
        setInterval(playAscii, 250);
    }
    document.getElementById('stop').onclick = function() {
        this.disabled = 'disabled';
        document.getElementById('start').disabled = '';
        setInterval(playAscii, 250);
    }
}

var playAscii = function() {

}