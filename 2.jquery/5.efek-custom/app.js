$(document).ready(function () {
  //efek custom animate
  $("#kiri").click(function () {
    $(".box1").animate({ left: "-=50px" }, "slow");
  });
  $("#kanan").click(function () {
    $(".box1").animate({ right: "-=50px" }, "slow");
  });

  //efek clearQueue
  $("#start").click(function () {
    $(".box2").animate({ right: "-=250px" }, 4000);
    $(".box2").queue(function () {});
  });
  $("#stop").click(function () {
    $(".box2").clearQueue();
    $(".box2").stop();
  });

  //efek delay
  $("#delay").click(function () {
    $(".box3").slideUp(2000).delay(2000).fadeIn(2000);
    $(".box4").slideUp(2000).fadeIn(2000);
  });
});
