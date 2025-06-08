$(document).ready(function () {
    $("html").css("--rotateImg", `rotate(360deg)`);
    $('#rotateSelect').val('360deg');
    $("#rotateSelect").on("change", function () {
        let newRotation = $(this).val();
        console.log("New rotation value:", newRotation);
        $("html").css("--rotateImg", `rotate(${newRotation})`);
    });
});

