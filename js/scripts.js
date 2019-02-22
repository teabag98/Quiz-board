$(document).ready(function(){
  ("form#quiz").click(function(){
    var radios =["radio1", "radio2","radio3","radio4","radio5","radio6","radio7","radio8","radio9","radio10","radio11"];
    radios.forEach(function(radio){
      var flavor = $("input:radio[name= radio]:checked").val();
      
    })

  })
})
