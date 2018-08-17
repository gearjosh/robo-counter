
$(function(){
  $("#input-form").submit(function(event){
    //backend logic
    var numberLister = function(number, array){
      for (var i = 1; i <= number; i ++){
          array.push(i);
      };
      robotOutputs = array
    };

    var roboConverter = function(array){
      array.forEach(function(number, index){
        var hasZero = /[0]/;
        if (hasZero.test(number) === true) {
          number = "Beep!";
          array[index] = number;
        }
      });
    };

    var stringMaker = function(array, string){
      array.forEach(function(element, index){
        if (element === array.length){
          string += element.toString();
        } else if (index === array.length){
          string += element
        } else if (typeof element === "number"){
          string += (element.toString() + ", ");
        } else {
          string += element
        }
      });
      robotOutput = string
    };
    //frontend logic
    var humanInput = $("#user-input").val();
    var robotOutputs = [];
    var robotOutput = "";
    event.preventDefault();
    numberLister(humanInput, robotOutputs);
    roboConverter(robotOutputs);
    stringMaker(robotOutputs, robotOutput);
    $("#result").text(robotOutput);
  });
});
