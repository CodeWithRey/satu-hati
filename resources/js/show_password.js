$(document).ready(function () {
    $(".show-password").on("click", function () {
        const inputField = $(this).siblings("input").eq(0);
        const icon = $(this).children().eq(0);
        if (inputField.attr("type") === "password") {
            inputField.attr("type", "text");
            icon.removeClass("fa-eye-slash");
            icon.addClass("fa-eye");
        } else {
            inputField.attr("type", "password");
            icon.removeClass("fa-eye");
            icon.addClass("fa-eye-slash");
        }
    });
});
