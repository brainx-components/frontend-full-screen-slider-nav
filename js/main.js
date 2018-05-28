// Custom JS

// Navbar JS

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    adjustBack(scroll_start, offset, scroll_start);
    if (startchange.length) {
        $(document).scroll(function () {
            adjustBack(scroll_start, offset, scroll_start);
        });
    }
});

function adjustBack(scroll_start, offset, scroll_start) {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top) {
        $(".navbar").css('background', 'rgba(255, 255, 255, 0.9)');
    } else {
        $('.navbar').css('background', 'transparent');
    }
}