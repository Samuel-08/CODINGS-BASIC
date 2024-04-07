$("#inputText").css("background-color", "gold");

$(document).ready(function () {
  // event click
  $("#tekan").click(function () {
    alert("hai ?");
    document.writeln(" hai? ");
    document.writeln("<p> hai 2 </p>");
  });

  // event yang mouse-enter
  $("#inputText").mouseenter(function () {
    $(this).css("border", "none");
  });

  // event yang keyup
  $("#inputText").keyup(function () {
    $("#keyup").text($(this).val());
  });
});
