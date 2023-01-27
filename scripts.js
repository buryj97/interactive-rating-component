// CHANGE CURSOR STYLE
$("button").css("cursor", "pointer");

//DISPLAY THANK YOU MESSAGE
$("#submit").click(function () {
  $("#firstBox").addClass("hidden");
  $("#secondBox").removeClass("hidden");
});

//SELECT AND DESELECT RATING BUTTONS
$(".number").click(function () {
  $(".number").removeClass("activeButton");
  $(this).toggleClass("activeButton");
});

//INSERT RATING INTO THANK YOU MESSAGE
$("#submit").click(function () {
  var rating = document.getElementsByClassName("activeButton")[0].value;
  document.getElementById("rating").innerHTML =
    "You have selected " + rating + " out of 5";
});
