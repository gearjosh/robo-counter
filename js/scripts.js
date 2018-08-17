
$(function(){
  $("#input-form").submit(function(event){
    //backend logic
    var numberChecker = function(input){
      if (isNaN(input) === true){
        valid = false;
        errorWarning("#user-input")
      }
    };

    var errorWarning = function(id){
      $(id).val("");
      $(id).addClass("error");
      $(id).attr("placeholder", "You must enter a number to continue, human.");
    };

    var errorReset = function(id){
      $(id).val("");
      $(id).removeClass("error");
      $(id).attr("placeholder", "Any number you like...");
    };

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
        if (number % 3 === 0)  {
          number = "I'm sorry, Dave. I'm afraid I can't do that.";
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
    var valid = true
    event.preventDefault();
    errorReset("#user-input");
    numberChecker(humanInput);
    if (valid === true) {
      arrayMaker(humanInput, robotOutputs);
      roboConverter(robotOutputs);
      stringMaker(robotOutputs, robotOutput);
      $("#result").text(robotOutput);
      $("#reiterate-input").text(humanInput);
    }
  });
});
