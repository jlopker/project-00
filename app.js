console.log("App.js is running!");

$(document).on('ready', function() {
//***PULL THE IDS FROM HTML AND MAKE A VARIABLE TO SET AND TO CALL TO THEIR X-AXIS LOCATION***/
  var $aLocation = $("#playerAvenir");
  var aLocation = 0;
  var winAvenirLocation = 85;
  var $gLocation = $("#playerGaramond");
  var gLocation = -2;
  var winGaramondLocation = 83;
  var winner = 'none';
//***GRABS SVG A OR G AND ATTRIBUTES X AXIS LOCATION TO ITS INDIVIDUAL PERCENTAGE ON THE STARTING LINE***/
/***THE EXACT PERCENTAGE SET TO IS DEPENDENT ON THE SIZE OF THE SVG WE ARE ANIMATING SO THEY APPEAR EQUAL ON THE PAGE***/
$aLocation.attr('x', aLocation + '%');
$gLocation.attr('x', gLocation + '%');
//***UNPOPULATED CONSTRUCTOR*/a IS 65 FOR KEYCODE AND G IS 71 FOR KEYCODE**//
$('body').keydown(function(event) {
  if(event.keyCode === 65 && winner === 'none'){
    $aLocation.attr('x', aLocation + '%');
    aLocation++;
    if(aLocation === winAvenirLocation){
      winner = 'Avenir';
      $('div.someoneWins').removeClass("hidden");
      $('h2.addText').html("<p>CONGRATULATIONS!</p><p>AVENIR WINS!</p><p>Close this window and click New Game to play again!</p>");
    }
  }else if(event.keyCode === 71 && winner === 'none'){
      $gLocation.attr('x', gLocation + '%');
      gLocation++;
      if(gLocation === winGaramondLocation){
        winner = 'Garamond';
        $('div.someoneWins').removeClass("hidden");
        $('h2.addText').html("<p>CONGRATULATIONS!</p><p>GARAMOND WINS!</p><p>Close this window and click New Game to play again!</p>");
      }
    }
});
  // console.log(gLocation);
//***OBJECTIVE BUTTON FUNCTIONALITY***//
  $("button.objective").on("click", function(){
    $("div.col-md-6.col-md-offset-3.popup.hidden").removeClass("hidden");//opens popup to explain objective
  });
  $("button.close").on("click", function(){
    $("div.col-md-6.col-md-offset-3.popup").addClass("hidden"); //makes popup go hidden again so you can play the game
  });
  $('button.winClose').on('click', function(){
    $('div.someoneWins').addClass('hidden');//closes winning popup box
  });
  $("button.replay").on("click", function(){ //onclick telling the button, when clicked, to reload the page for a new game
    location.reload();
  });
});
