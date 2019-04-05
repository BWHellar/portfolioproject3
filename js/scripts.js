$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val()));
  })



    function count(num) {
      var newNum = num
      var numberArray = [1,2,3];
      for(var i = 0; newNum.length; i++){
         if (newNum == numberArray);
          console.log(newNum);
          return newNum;
        }
    }
  });
