//backend logic
var numberLister = function(input, output)
  for (var i=1; i<=input; i++){
    if (i = input) {
      output.append(i);
    } else {
      output.append(i + ", ");
    }
  };
//frontend logic
$(function(){
  var humanInput = $("#user-input").val()
  var robotOutput = ""
  $("#input-form").submit(function(event){
    event.preventDefault();
    numberLister(humanInput, robotOutput)
    $("#result").text(robotOutput);
  });
});
