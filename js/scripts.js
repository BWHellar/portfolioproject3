//Front End Logic //
$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val())); spaceIt();
  })
//Business Logic //
    //This function is to find all instances of "," and give them a space after//
    function spaceIt(){
      $("body").children().each(function() {
      $(this).html($(this).html().replace(/,/g, ", "));
    });
  }
    //This function is to both count and replace the selceted numbers that need to be changed//
    function count(num) {
      var priorNum = [];
      var newNum = num;
      var repoNum = ["1","2","3"]
      var wordArray = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that"];
      for(var i = 0; i <= newNum; i++) {
        if(i.toString().split('').includes(repoNum[3])) {
          priorNum.push(wordArray[3]);
        }else if(i.toString().split('').includes(repoNum[2])) {
          priorNum.push(wordArray[2]);
        }else if(i.toString().split('').includes(repoNum[1])) {
          priorNum.push(wordArray[1]);
        }else priorNum.push(i);
      }
      return (priorNum + ",");
    }
  });
