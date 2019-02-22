

$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var radios =["1", "2","3","4"];
     radios.forEach(function(eachRadio){

         var oneRadio = $("input:radio[name=radio" + eachRadio+"]:checked").val();
         $("#results").text(oneRadio);
     });
   });



  });
});
