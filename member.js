$(function () {

    $(".manager").click(function () {
        $(".emp").removeClass("highlight");
        $(this).find(".emp").addClass("highlight");
    });

    $(".emp").hover(
        function () { $(this).find(".info").show(); },
        function () { $(this).find(".info").hide(); }
    );

    $(".dept").click(function () {
        $(this).next(".team").children().css("background", "#d0f0ff");
    });

    $("#randomBtn").click(function () {
        let items = $(".emp");
        let r = Math.floor(Math.random() * items.length);
        items.removeClass("highlight");
        $(items[r]).siblings().addClass("highlight");
    });

    $("#toggleTeam").click(function () {
        $(".team").parent().find("ul").toggle();
    });

});
