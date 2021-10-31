$(document).ready(function() {
  $("#shoutForm").submit(function(event) {
    const shout = $("input#shout1").val();
    $(".userShout").append(shout.toUpperCase());
    $("#shoutDisplay").show();
    event.preventDefault();
  });
});