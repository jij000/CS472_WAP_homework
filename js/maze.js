$(document).ready(function () {
    let winFlag = false;
    let lose = function () {
        if (winFlag == true) {
            $('.boundary').addClass("youlose");
            winFlag = false;
            $('#status').text('Sorry, you lose. :[, Click the "S" to begin.');
        }
    };
    $('.boundary').mouseover(lose);
    $('#start').click(function () {
        winFlag = true;
        $('.boundary').removeClass("youlose");
        $('#status').text('Click the "S" to begin.');
    });
    $('#end').click(function () {
        if (winFlag == true) {
            $('#status').text("You win! :]");
            winFlag = false;
        }
    });
    $("#maze").mouseleave(lose);
});
