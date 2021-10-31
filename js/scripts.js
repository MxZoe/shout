$(document).ready(function() {
const shoutArray= [];
  $("#shoutForm").submit(function(event) {
    const shout = $("input#shout1").val();
    shoutArray.push(shout);
    $("#shoutDisplay").show();
    $("#shoutForm").trigger("reset");
    $("#shoutDisplay").fadeOut(7500);

    event.preventDefault();
  });
  document.getElementById("button-2").addEventListener("click", function(){
    const length = shoutArray.length - 1;
    const randNum = 1+ Math.random() * length;
    $(".retrieved").prepend(shoutArray[randNum]);
  });
});