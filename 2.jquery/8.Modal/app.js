$(document).ready(function () {
  $("#tombol").click(function () {
    $("#modal-box").slideDown(1200);
    $("body").addClass("modals-bg").fadeIn(600);
  });
  $("#close-button").click(function () {
    $("#modal-box").fadeOut(500);
    $("body").removeClass("modals-bg");
  });
});
