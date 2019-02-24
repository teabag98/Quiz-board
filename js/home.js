$(document).ready(function(){
  $("input#submit").click(function(event){
    event.preventDefault();
    var name = $("input#user").val();
    $(".name").text(name);
    $(".welcome").slideDown();
    $("#link").fadeIn();
  });
});
