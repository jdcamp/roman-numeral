$(function() {
  var convertOnes = function(myNumber) {
  	switch (myNumber) {
    	case 0: return ""; break;
      case 1: return "I"; break;
      case 2: return "II"; break;
      case 3: return "III"; break;
      case 4: return "IV"; break;
      case 5: return "V"; break;
      case 6: return "VI"; break;
      case 7: return "VII"; break;
      case 8: return "VIII"; break;
      case 9: return "IX"; break;
      default: alert("Error in 1's places");
    }
  }
  var convertTens = function(myNumber) {
  	switch (myNumber) {
    	case 0: return ""; break;
      case 1: return "X"; break;
      case 2: return "XX"; break;
      case 3: return "XXX"; break;
      case 4: return "XL"; break;
      case 5: return "L"; break;
      case 6: return "LX"; break;
      case 7: return "LXX"; break;
      case 8: return "LXXX"; break;
      case 9: return "XC"; break;
      default: alert("Error in 10's places");
    }
  }
  var convertHundreds = function(myNumber) {
  	switch (myNumber) {
    	case 0: return ""; break;
      case 1: return "C"; break;
      case 2: return "CC"; break;
      case 3: return "CCC"; break;
      case 4: return "CD"; break;
      case 5: return "D"; break;
      case 6: return "DC"; break;
      case 7: return "DCC"; break;
      case 8: return "DCCC"; break;
      case 9: return "CM"; break;
      default: alert("Error in 100's places");
    }
  }
  var convertThousands = function(myNumber) {
  	switch (myNumber) {
    	case 0: return ""; break;
      case 1: return "M"; break;
      case 2: return "MM"; break;
      case 3: return "MMM"; break;
      default: alert("Error in 1000's places");
    }
  }
  var isValid = function(myNumber) {
    myNumber = parseInt(myNumber);
    if (myNumber > 0 && myNumber < 4000){
      return true;
    } else {
      return false;
    }
  }
  var mainConverter = function (myNumber) {
    //needs a number validator function
    //alert("MyNumber is " + myNumber);
    myNumber = parseInt(myNumber);
    var outputRomanNumerals = "";
    if (myNumber >= 1000) {
      outputRomanNumerals = outputRomanNumerals + convertThousands(Math.floor(myNumber/1000));
      myNumber = myNumber - (1000 * Math.floor(myNumber/1000));
    }
    if (myNumber >= 100){
      outputRomanNumerals = outputRomanNumerals + convertHundreds(Math.floor(myNumber/100));
      myNumber= myNumber - (100 * Math.floor(myNumber/100));
    //  alert("MyNumber is " + myNumber);
    }
    if (myNumber >= 10) {
      outputRomanNumerals = outputRomanNumerals + convertTens(Math.floor(myNumber/10));
      myNumber = myNumber - (10 * Math.floor(myNumber/10));
    }
    if (myNumber >= 0) {
      outputRomanNumerals = outputRomanNumerals + convertOnes(myNumber);
    }
    return outputRomanNumerals;
  }
$("form#number-input").submit(function(event) {
  event.preventDefault();
  var number= $("input#number").val();
  if (isValid(number)) {
    $(".output").text(mainConverter(number));
  } else {
    alert("Not a valid input")
  }
})

})
