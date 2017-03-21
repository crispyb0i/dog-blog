$(document).ready(function() {
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day");
  });

  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night");
  });
  
  $("p").click(function() {
    $("p").removeClass();
    $("p").addClass("highlighted");
  });
});
