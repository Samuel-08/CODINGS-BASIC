$(document).ready(function () {
  $("#hide").click(function () {
    //efek hide
    $("#kotak").hide(3000);
    // $("#kotak").hide("fast");
  });
  //efek show
  $("#show").click(function () {
    $("#kotak").show(2000);
  });

  //efek fade out
  $("#fade-out").click(function () {
    $(".box1").fadeOut(800);
    $(".box2").fadeOut(2000);
    $(".box3").fadeOut(3700);
  });

  //efek fade in
  $("#fade-in").click(function () {
    $(".box1").fadeIn(4200);
    $(".box2").fadeIn(2500);
    $(".box3").fadeIn(1100);
  });

  //efek fade toggle
  $("#fade-toggle").click(function () {
    $(".box1").fadeToggle(1000);
    $(".box2").fadeToggle(2700);
    $(".box3").fadeToggle(3500);
  });

  //efek fade to
  $("#fade-to").click(function () {
    $(".box1").fadeTo("slow", 0.2);
    $(".box2").fadeTo("slow", 0.6);
    $(".box3").fadeTo("slow", 0.8);
  });
});
