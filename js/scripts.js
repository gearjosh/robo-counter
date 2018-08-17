
$(function(){
  $("#input-form").submit(function(event){
    //backend logic
    var numberLister = function(number, array){
      for (var i = 1; i <= number; i ++){
          array.push(i);
      };
      robotOutputs = array
    };

    var stringMaker = function(array, string){
      array.forEach(function(number){
        if (number === array.length) {
          string += number.toString();
        } else {
          string += (number.toString() + ", ");
        }
      });
      robotOutput = string
    };
    //frontend logic
    var humanInput = $("#user-input").val()
    console.log(humanInput);
    var robotOutputs = []
    var robotOutput = ""
    event.preventDefault();
    numberLister(humanInput, robotOutputs)
    console.log(robotOutputs);
    stringMaker(robotOutputs, robotOutput);
    console.log(robotOutput);
    $("#result").text(robotOutput);
  });
});
