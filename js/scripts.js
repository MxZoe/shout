let shoutMemory= [];

$(document).ready(function() {
  $("#shoutForm").submit(function(event) {
    if("#shout1".val() != null){
      shoutMemory.push($("#shout1").val());
      $("#shoutDisplay").show();
      $("#shoutForm").trigger("reset");
      $("#shoutDisplay").fadeOut(7500);
    }
    else{
      $("#shoutDisplay").hide();
    }
    event.preventDefault();
  });

});