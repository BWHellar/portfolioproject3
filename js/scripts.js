$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val()));
  })



    function count(num) {
      var newNum = num
      var numberArray = [1,2,3];
      var replaced = ["Beep", "Boop", "I'm sorry, Dave. I'm afraid I can't do that"]
      for(var i = 0; newNum.length; i++){
         if (newNum == numberArray[0]);{
          $("#result").append(replaced[0])
        } if (newNum == numberArray[1]);{
          $("#result").append(replaced[1])
        } if (newNum == numberArray[2]);{
          $("#result").append(replaced[2])
      }
      return num;
    }
  }
});
