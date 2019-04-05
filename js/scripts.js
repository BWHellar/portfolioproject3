//Front End Logic //
$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val())); alter();
  })
//Business Logic //
    function alter(){
      $("body").children().each(function() {
        var wordArray = ["Beep", "Boop", "I'm sorry, Dave. I'm afraid I can't do that."]
          $(this).html($(this).html().replace(/1/g, wordArray[0]));
          $(this).html($(this).html().replace(/2/g, wordArray[1]));
          $(this).html($(this).html().replace(/3/g, wordArray[2]));
          $(this).html($(this).html().replace(/13/g, wordArray[2]));
          $(this).html($(this).html().replace(/21/g, wordArray[1]));
          $(this).html($(this).html().replace(/32/g, wordArray[2]));
      });
    }
    // Number Counter //
    function count(num) {
      var priorNum = "";
      var newNum = num;
      for(var i = 0; i <= num; i++) {
        priorNum += i;
        if (i < num) {
          priorNum += ' ';
        }
      }
      return ("" + priorNum);
    }
  });
