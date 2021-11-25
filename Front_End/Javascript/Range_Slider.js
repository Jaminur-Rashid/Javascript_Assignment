/*
function f() {
  console.log("Range slider works");
}
var m = 0;
var mn = 0;
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500000,
    values: [75, 3000],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
  console.log("Pruice value is : "+$('#slider-range').slider("values")[0])
});
*/
