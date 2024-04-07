$(document).ready(function () {
  $(".navbar li").hover(function () {
    $(this).find("ul").stop().slideToggle("fast");
  });
});
