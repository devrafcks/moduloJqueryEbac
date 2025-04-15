$(document).ready(function () {
    $("header button").click(() => {
        $("form").slideDown();
    });

    $(".cancelar").click(() => {
        $("form").slideUp();
    });

    $("form").on("submit", (event) => {
        event.preventDefault();

        const address = $("input").val().trim();

        const newLi = $("<li></li>");
        const newImage = $("<img>").attr("src", address);

        newLi.append(newImage);
        $("ul").append(newLi);
        $("input").val("");
        $("form").slideUp();
    });
});
