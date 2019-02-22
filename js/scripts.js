

$(document).ready(function(){
  $("form#quiz").click(function(event){
    event.preventDefault();
    var radios =["radio1", "radio2","radio3","radio4"];
    radios.forEach(function(radio){
      var oneRadio = $("input:radio[name= radio ]:checked").val();
      $(".col-md-4").text(oneRadio);
    });

  });
});
