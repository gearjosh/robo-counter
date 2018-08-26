//Back End Logic
function arrayMaker(number) {
  var roboArray = [];
  for (var i = 0; i <= number; i ++){
    roboArray.push(i);
  };
  return roboArray;
};

function roboConverter(array) {
  array.forEach(function(number, index){
    var hasZero = /[0]/;
    var hasOne = /[1]/;

    if () {}

    if (number % 3 === 0 && number != 0)  {
      number = "I'm sorry, Dave. I'm afraid I can't do that.";
      array[index] = number;
    }
    if (hasOne.test(number) === true)  {
      number = "Boop!";
      array[index] = number;
    }
    if (hasZero.test(number) === true)  {
      number = "Beep!";
      array[index] = number;
    }
  });
};

function stringMaker(array) {
  var roboString = "";
  array.forEach(function(element, index){
    if (element === array.length){
      roboString += element.toString();
    } else if ((index + 1) === array.length){
      roboString += element;
    } else if (typeof element === "number"){
      roboString += (element.toString() + ", ");
    } else if (typeof element === "string"){
      roboString += (element + ", ");
    } else {
      roboString += element;
    }
  });
  return roboString;
};

function primeChecker(number) {
   if (number < 2) {
     return false;
   }
   if (Number.isInteger(number) === false) {
     return false;
   }
   var isPrime = true;
   for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0) {isPrime = false}
   }
   return isPrime;
};

//Front End Logic
function numberChecker(input) {
  if ((isNaN(input) === true) || input === "" || Number.isInteger(input) === false){
    errorWarning("#user-input", "#look-at-me");
    return false;
  } else {
    return true;
  }
  if (input === "666"){
    $("body").toggleClass("evil-body");
    $("h1").toggleClass("evil-h1");
    $("h4").toggleClass("evil-h4");
  }
};

function errorWarning(id1, id2) {
  $(id1).val("");
  $(id1).addClass("error");
  $(id1).attr("placeholder", "You must enter a number to continue, human.");
  $(id2).addClass("attention");
};

function errorReset(id1, id2) {
  $(id1).val("");
  $(id1).removeClass("error");
  $(id1).attr("placeholder", "Another?");
  $(id2).removeClass("attention");
};

$(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();
    var humanInput = $("#user-input").val();
    errorReset("#user-input", "#look-at-me");
    if (numberChecker(parseInt(humanInput)) === true) {
      var robotOutputs = arrayMaker(humanInput);
      roboConverter(robotOutputs);
      var robotOutput = stringMaker(robotOutputs);
      $("#result").text(robotOutput);
      $("#reiterate-input").text(humanInput);
    }
  });
});
