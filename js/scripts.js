$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val()));
  })



    function count(num) {
   // Variables //
    var roman = ["Beep", "Boop", "I'm sorry, Dave. I'm afraid I can't do that"];
    var equiv = [1, 2, 3];
    var romanNum = "";
    var newRome = num;
    var i;
    if (newRome == 1){
      for (i = 0; i <= equiv.length; i++){
        while (newRome >= equiv[i]){
          romanNum += roman[i];
          newRome -= equiv[i];
        if (equiv[0] == num)
        return roman [0];
      }
      }
    } else if (newRome == 2) {
      for (i = 0; i <= equiv.length; i++){
        while (newRome >= equiv[i]){
          romanNum += roman[i];
          newRome -= equiv[i];
        if (equiv[1] == num)
        return roman [1];
      }
      }
    } else if (newRome == 3) {
      for (i = 0; i <= equiv.length; i++){
        while (newRome >= equiv[i]){
          romanNum += roman[i];
          newRome -= equiv[i];
        if (equiv[2] == num)
        return roman [2];
      }
      }
    }
  }
});
    //   var newNum = num
    //   var numberArray = [1,2,3];
    //   var replaced = ["Beep", "Boop", "I'm sorry, Dave. I'm afraid I can't do that"]
    //   for(var i = 0; newNum.length; i++){
    //      if (newNum == numberArray[0]);{
    //       $("#result").append(replaced[0])
    //     } if (newNum == numberArray[1]);{
    //       $("#result").append(replaced[1])
    //     } if (newNum == numberArray[2]);{
    //       $("#result").append(replaced[2])
    //   }
    //   return num;
    // }
