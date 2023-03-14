$(document).ready(function() {

    var human, ai;
  
    var c00, c01, c02, c10, c11, c12, c20, c21, c22;
  
    var turn = 0;
  
    $("#x").click(function() {
      human = "X";
      ai = "O";
      $("#choice").fadeOut();
      $("#board").fadeTo("slow",1);
    });
    $("#o").click(function() {
      human = "O";
      ai = "X";
      $("#choice").fadeOut();
      $("#board").fadeTo("slow",1);
    });
  
    
    function clearBoard() {
      c00 = $("#c00").text("");
      c01 = $("#c01").text("");
      c02 = $("#c02").text("");
      c10 = $("#c10").text("");
      c11 = $("#c11").text("");
      c12 = $("#c12").text("");
      c20 = $("#c20").text("");
      c21 = $("#c21").text("");
      c22 = $("#c22").text("");
      turn = 0;
    }
  
    $("#new-game").click(function() {
      clearBoard();
      $("#final-screen").hide();
      $("#choice").fadeTo("slow",1);
    });
  
    $("td").click(function() {
      if (turn === 0) {
        if ($(this).text() === "") {
          $(this).text(human);
          checkSquareValues();
          checkBoardState();
          turn = 1;
          aiMove();
          checkSquareValues();
          checkBoardState();
        } else {
          alert("There is already a move on that square. Please pick a different square.");
        }
      }
    }); 
    function aiMove() {
     
      if (c00 === "" && ((c01 === ai && c02 === ai) || (c10 === ai && c20 === ai) || (c11 === ai && c22 === ai))) {
        $("#c00").text(ai);
        turn = 0;
      }
      else if (c01 === "" && ((c00 === ai && c02 === ai) || (c11 === ai && c21 === ai))) {
        $("#c01").text(ai);
        turn = 0;
      }
      else if (c02 === "" && ((c00 === ai && c01 === ai) || (c12 === ai && c22 === ai) || (c11 === ai && c20 === ai))) {
        $("#c02").text(ai);
        turn = 0;
      }
      else if (c10 === "" && ((c00 === ai && c20 === ai) || (c11 === ai && c12 === ai))) {
        $("#c10").text(ai);
        turn = 0;
      }
      else if (c11 === "" && ((c10 === ai && c12 === ai) || (c00 === ai && c22 === ai) || (c02 === ai && c20 === ai))) {
        $("#c11").text(ai);
        turn = 0;
      }
      else if (c12 === "" && ((c10 === ai && c11 === ai) || (c02 === ai && c22 === ai))) {
        $("#c12").text(ai);
        turn = 0;
      }
      else if (c20 === "" && ((c21 === ai && c22 === ai) || (c00 === ai && c10 === ai) || (c02 === ai && c11 === ai))) {
        $("#c20").text(ai);
        turn = 0;
      }
      else if (c21 === "" && ((c20 === ai && c22 === ai) || (c01 === ai && c11 === ai))) {
        $("#c21").text(ai);
        turn = 0;
      }
      else if (c22 === "" && ((c20 === ai && c21 === ai) || (c02 === ai && c12 === ai) || (c00 === ai && c11 === ai))) {
        $("#c22").text(ai);
        turn = 0;
      }
      
      else if (c00 === "" && ((c01 === human && c02 === human) || (c10 === human && c20 === human) || (c11 === human && c22 === human))) {
        $("#c00").text(ai);
        turn = 0;
      }
      else if (c01 === "" && ((c00 === human && c02 === human) || (c11 === human && c21 === human))) {
        $("#c01").text(ai);
        turn = 0;
      }
      else if (c02 === "" && ((c00 === human && c01 === human) || (c12 === human && c22 === human) || (c11 === human && c20 === human))) {
        $("#c02").text(ai);
        turn = 0;
      }
      else if (c10 === "" && ((c00 === human && c20 === human) || (c11 === human && c12 === human))) {
        $("#c10").text(ai);
        turn = 0;
      }
      else if (c11 === "" && ((c10 === human && c12 === human) || (c00 === human && c22 === human) || (c02 === human && c20 === human))) {
        $("#c11").text(ai);
        turn = 0;
      }
      else if (c12 === "" && ((c10 === human && c11 === human) || (c02 === human && c22 === human))) {
        $("#c12").text(ai);
        turn = 0;
      }
      else if (c20 === "" && ((c21 === human && c22 === human) || (c00 === human && c10 === human) || (c02 === human && c11 === human))) {
        $("#c20").text(ai);
        turn = 0;
      }
      else if (c21 === "" && ((c20 === human && c22 === human) || (c01 === human && c11 === human))) {
        $("#c21").text(ai);
        turn = 0;
      }
      else if (c22 === "" && ((c20 === human && c21 === human) || (c02 === human && c12 === human) || (c00 === human && c11 === human))) {
        $("#c22").text(ai);
        turn = 0;
      }
      
      else if (c11 === "") {
        $("#c11").text(ai);
        turn = 0;
      }
      
      else if (c00 === "" && (c02 === human  || c20 === human)) {
        $("#c00").text(ai);
        turn = 0;
      }
      else if (c02 === "" && (c00 === human  || c22 === human)) {
        $("#c02").text(ai);
        turn = 0;
      }
      else if (c22 === "" && (c02 === human  || c20 === human)) {
        $("#c22").text(ai);
        turn = 0;
      }
      else if (c20 === "" && (c00 === human  || c22 === human)) {
        $("#c20").text(ai);
        turn = 0;
      }
     
      else if (c00 === "") {
        $("#c00").text(ai);
        turn = 0;
      }
      else if (c02 === "") {
        $("#c02").text(ai);
        turn = 0;
      }
      else if (c20 === "") {
        $("#c20").text(ai);
        turn = 0;
      }
      else if (c22 === "") {
        $("#c22").text(ai);
        turn = 0;
      }
      
      else if (c01 === "") {
        $("#c01").text(ai);
        turn = 0;
      }
      else if (c12 === "") {
        $("#c12").text(ai);
        turn = 0;
      }
      else if (c21 === "") {
        $("#c21").text(ai);
        turn = 0;
      }
      else if (c10 === "") {
        $("#c10").text(ai);
        turn = 0;
      }
    }
  
    function checkSquareValues() {
      c00 = $("#c00").html();
      c01 = $("#c01").html();
      c02 = $("#c02").html();
      c10 = $("#c10").html();
      c11 = $("#c11").html();
      c12 = $("#c12").html();
      c20 = $("#c20").html();
      c21 = $("#c21").html();
      c22 = $("#c22").html();
    }
  
    
    function checkBoardState() {
    
      if ((c00 === c01 && c00 === c02 && (c00 === human)) || 
        (c10 === c11 && c10 === c12 && (c10 === human)) || 
        (c20 === c21 && c20 === c22 && (c20 === human)) || 
        (c00 === c10 && c00 === c20 && (c00 === human)) || 
        (c01 === c11 && c01 === c21 && (c01 === human)) || 
        (c02 === c12 && c02 === c22 && (c02 === human)) || 
        (c00 === c11 && c00 === c22 && (c00 === human)) || 
        (c02 === c11 && c02 === c20 && (c02 === human)) 
      ) {
        $("#board").fadeOut("slow");
        $("#winner").text("You win!");
        $("#final-screen").fadeTo("slow",1);
      }
      
      else if ((c00 === c01 && c00 === c02 && (c00 === ai)) || 
        (c10 === c11 && c10 === c12 && (c10 === ai)) ||
        (c20 === c21 && c20 === c22 && (c20 === ai)) || 
        (c00 === c10 && c00 === c20 && (c00 === ai)) || 
        (c01 === c11 && c01 === c21 && (c01 === ai)) || 
        (c02 === c12 && c02 === c22 && (c02 === ai)) || 
        (c00 === c11 && c00 === c22 && (c00 === ai)) || 
        (c02 === c11 && c02 === c20 && (c02 === ai)) 
      ) {
        $("#board").fadeOut("slow");
        $("#winner").text("Computer wins!");
        $("#final-screen").fadeTo("slow",1);
      }
      
      else if (c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22) {
        $("#board").fadeOut("slow");
        $("#winner").text("It's a tie!");
        $("#final-screen").fadeTo("slow",1);
      }
    }
  
  }); 