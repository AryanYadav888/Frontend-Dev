var $v1 = jQuery.noConflict(true);  
var $v2 = jQuery.noConflict(true); 

$v1(function () {
    let i = 0;
    function rotate() {
        let slides = $v1(".slide");
        slides.hide();
        slides.eq(i).show().addClass("active");
        i = (i + 1) % slides.length;
    }
    rotate();
    setInterval(rotate, 3000);
});

$v1(function () {
    $v1(".widget").click(function () {
        $v1(".widget").removeClass("active");
        $v1(this).addClass("active");
    });
});

$v2(function () {
    $v2("#notifBtn").click(function () {
        $v2("#modal").fadeIn();
        setTimeout(() => $v2("#modal").fadeOut(), 2000);
    });
});

$v2(function () {
    $v2(".tip").hover(
        function (e) {
            $v2("#tooltip").css({ top: e.pageY + 10, left: e.pageX + 10 }).fadeIn();
        },
        function () {
            $v2("#tooltip").fadeOut();
        }
    );
});
