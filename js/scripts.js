const shoutMemory= [];

function random(anArray){
  return 1+Math.random()*anArray.length;
}

$(document).ready(function() {
  $("#shoutForm").submit(function(event) {
    shoutMemory.push($("#shout1").val());
    $("#shoutDisplay").show();
    $("#shoutForm").trigger("reset");
    $("#shoutDisplay").fadeOut(7500);
    event.preventDefault();
  });

  document.getElementById("button-2").addEventListener("click", function(){
    $("retrieveDisplay").show()
    if(shoutMemory.length <= 0){
      $("#
    }
  });
});