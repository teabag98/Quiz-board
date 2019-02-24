



//business logic
function messages() {
  var output1 = document.javascr.radio1.value;
  var output2 = document.javascr.radio2.value;
  var output3 = document.javascr.radio3.value;
  var output4 = document.javascr.radio4.value;

  if (output1 == "" || output2 == "" || output3 == "" || output4 == "") {
    //custom alert box
    $(".box2").show(".box2");

    return false;
  } else {
    $(".box").show(".box");
    return true;
  }
};
 var index =0
function results(){
  if(score==30){
    index+=30;
  }
  else{
    index+=0
  }
}











//user logic
$(document).ready(function() {
  $("button#boxbutton1").click(function(){
    $(".box").fadeOut();
  })
  $("button#boxbutton2").click(function(){
    $(".box2").fadeOut();
  })

  $("button#submit").click(function() {
    var input1 = parseInt($("input:radio[name=radio1]:checked").val());
    var input2 = parseInt($("input:radio[name=radio2]:checked").val());
    var input3 = parseInt($("input:radio[name=radio3]:checked").val());
    var input4 = parseInt($("input:radio[name=radio5]:checked").val());
    var results = eval(input1 + input2 + input3 + input4);
    // $(".col-md-4").removeClass();
    $(".col-md-4").addClass("yourScore");
    $(".col-md-4").text("Your score is " + results);
  });


});
