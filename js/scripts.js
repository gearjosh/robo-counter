
$(function(){
  $("#input-form").submit(function(event){
    //backend logic
    var numberLister = function(input, output){
      for (var i = 1; i <= input; i ++){
        if (i.toString() === input) {
          output += (i.toString());
        } else {
          output += (i.toString() + ", ");
        }
      };
      robotOutput = output
    };
    //frontend logic
    var humanInput = $("#user-input").val()
    console.log(humanInput);
    var robotOutput = ""
    event.preventDefault();
    numberLister(humanInput, robotOutput)
    console.log(robotOutput);
    $("#result").text(robotOutput);
  });
});
