$(document).ready(function () {
    $("#rotateSelect").on("change", function () {
        let newRotation = $(this).val();
        console.log("New rotation value:", newRotation);
        $("html").css("--rotateImg", `rotate(${newRotation})`);
    });
});

