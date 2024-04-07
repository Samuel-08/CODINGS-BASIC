$(document).ready(function () {
  //efek slide Up
  $("#slideUp").click(function () {
    $("#slide").slideUp("slow");
  });
  //efek slideDown
  $("#slideDown").click(function () {
    $("#slide").slideDown(2100);
  });
  //efek slideToggle
  $("#slideToggle").click(function () {
    $("#slide").slideToggle(2100);
  });
});
