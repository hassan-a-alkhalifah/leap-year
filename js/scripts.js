// Business logic
var leapYear = function(year) {
  return false;
};

// jQuery user interface logic
$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
