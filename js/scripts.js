$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val()));
  })



    function count(num) {
      console.log(num);
      // var inputNum =
      var array = [1,2,3,4,5,6,7,8,9,10]
      var replaceWords = ["Beep", "Boop", "I'm sorry, Dave. I'm afraid I can't do that."]
      var count = 0;
      var newNum = num
      for(var i = 0; i < array.length; i++){
        while (newNum >= array[i]){
          count += array[i];
          num -= array[i];
          console.log(newNum);
            }
          }
          return count;
        }
      });
