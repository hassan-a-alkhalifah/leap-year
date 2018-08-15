// Business logic
var leapYear = function(year) {
  alert(year%4);
  if(year % 4 === 0) {
    return true;
  } else {
    return false;
  }
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
