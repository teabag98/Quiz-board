


  $("form#javascr").submit(function(event){

    var question1 = $("input:radio[name=radio1]:checked").val();
    var question2 = $("input:radio[name=radio2]:checked").val();
    var question3= $("input:radio[name=radio3]:checked").val();


    // $("#display").text("Your score is:" + result +"/20 pts");

    event.preventDefault();

  });

var yourScore=0

function marks(){
  if (question1 == "2") {
    yourScore += 20;
  }
  if (question2 == "1") {
    yourScore += 20;

  }
  if (question3 == "2") {
    yourScore += 20;
  }
}






document.getElementById("results").innerHTML = "Your score is " +yourScore;
