$(function () {

    $("#sub").click(function () {
        $("#msg").text("Notifications Enabled");
    });

    $("#unsub").click(function () {
        $("#msg").text("Notifications Disabled");
    });

    $(document).on("click", ".topic", function () {
        $("#msg").text("Subscribed to " + $(this).text());
    });

    $("#addTopic").click(function () {
        $("#topics").append('<li class="topic">New Topic</li>');
    });

    $("#topics").on("dblclick", ".topic", function () {
        $(this).off("click").remove();
        $("#msg").text("Topic Removed");
    });

});
