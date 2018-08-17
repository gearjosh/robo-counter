
$(function(){
  $("#input-form").submit(function(event){
    //backend logic
    var arrayMaker = function(number, array){
      for (var i = 1; i <= number; i ++){
          array.push(i);
      };
      robotOutputs = array //had to add to get it to work
    };

    var roboConverter = function(array){
      array.forEach(function(number, index){
        var hasZero = /[0]/;
        var hasOne = /[1]/;
        if (hasZero.test(number) === true)  {
          number = "Beep!";
          array[index] = number;
        }
        if (hasOne.test(number) === true)  {
          number = "Boop!";
          array[index] = number;
        }
      });
    };

    var stringMaker = function(array, string){
      array.forEach(function(element, index){
        if (element === array.length){
          string += element.toString();
        } else if ((index + 1) === array.length){
          string += element
        } else if (typeof element === "number"){
          string += (element.toString() + ", ");
        } else if (typeof element === "string"){
          string += (element + ", ");
        } else {
          string += element
        }
      });
      robotOutput = string //had to add to get it to work
    };
    //frontend logic
    var humanInput = $("#user-input").val();
    var robotOutputs = [];
    var robotOutput = "";
    event.preventDefault();
    arrayMaker(humanInput, robotOutputs);
    roboConverter(robotOutputs);
    stringMaker(robotOutputs, robotOutput);
    $("#result").text(robotOutput);
  });
});
