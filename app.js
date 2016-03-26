
console.log("App.js is running!");

$(document).on('ready', function() {
//***PULL THE IDS FROM HTML AND MAKE A VARIABLE TO SET AND TO CALL TO THEIR X-AXIS LOCATION***/
  var $gLocation = $("#playerGaramond");
  var $aLocation = $("#playerAvenir");
//***GRABS SVG A OR G AND ATTRIBUTES X AXIS LOCATION TO ITS INDIVIDUAL PERCENTAGE ON THE STARTING LINE***/
/***THE EXACT PERCENTAGE SET TO IS DEPENDENT ON THE SIZE OF THE SVG WE ARE ANIMATING SO THEY APPEAR EQUAL ON THE PAGE***/
  $gLocation.attr('x', -3 + '%');
  $aLocation.attr('x', 0 + '%');



//***UNPOPULATED CONSTRUCTOR***//
function Game(){

}

//***THEORETICALLY: WILL ALERT WHEN THE WINNING PLAYER REACHES THE FINISH LINE***//
  Game.prototype.winner = function(){
    if (avenir === $aLocation.attr('x', 95 +'%') || garamond === $gLocation.attr('x', 95 +'%')) {
      alert(this + ' WINS!');
      console.log(this);
    }
  };

//***OBJECTIVE BUTTON FUNCTIONALITY***//
  $("button.objective").on("click", function(){
    $("div.col-md-6.col-md-offset-3.popup.hidden").removeClass("hidden");//opens popup to explain objective
  });
  $("button.close").on("click", function(){
    $("div.col-md-6.col-md-offset-3.popup").addClass("hidden"); //makes popup go hidden again so you can play the game
  });

  $("button.replay").on("click", function(){ //onclick telling the button, when clicked, to reload the page for a new game
    location.reload();
  });
});
