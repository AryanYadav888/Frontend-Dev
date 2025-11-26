$(function () {

    $("#search").keyup(function () {
        let t = $(this).val().toLowerCase();
        let c = 0;

        $(".course").each(function () {
            let text = $(this).text().toLowerCase();
            if (text.includes(t)) {
                $(this).show().css("background", "yellow");
                c++;
            } else {
                $(this).hide().css("background", "white");
            }
        });

        $("#count").text(c);
    });

    $("#clear").click(function () {
        $("#search").val("");
        $(".course").show().css("background", "white");
        $("#count").text($(".course").length);
    });

});
