$(document).ready(function() {
const shoutArray= new Array();
  $("#shoutForm").submit(function(event) {
    const shout = $("input#shout1").val();
    
    $("#shoutDisplay").show();
    $("#shoutForm").trigger("reset");
    $("#shoutDisplay").fadeOut(7500);

    event.preventDefault();
  });
  document.getElementById("button-1").onclick(function(){

  });
});