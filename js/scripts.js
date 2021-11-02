$(document).ready(function() {
  let shoutMemory= [];
  $("#shoutForm").submit(function(event) {
    shoutMemory.push($("input#shout1").val());
    $("#shoutDisplay").show();
    $("#shoutForm").trigger("reset");
    $("#shoutDisplay").fadeOut(7500);
    event.preventDefault();
  });

  document.getElementById("button-2").addEventListener("click", function(){
    window.location.href="void.html"
  });
});