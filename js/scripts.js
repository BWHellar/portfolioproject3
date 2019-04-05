$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val()));
  })
  $("#replaceMe").click(function() {
      $("body").children().each(function() {
          $(this).html($(this).html().replace(/1/g,"Beep"));
          $(this).html($(this).html().replace(/2/g,"Boop"));
          $(this).html($(this).html().replace(/3/g,"I'm sorry, Dave. I'm afraid I can't do that."));
          $(this).html($(this).html().replace(/13/g,"I'm sorry, Dave. I'm afraid I can't do that."));
          $(this).html($(this).html().replace(/21/g,"Boop"));
          $(this).html($(this).html().replace(/32/g,"I'm sorry, Dave. I'm afraid I can't do that."));
      });
    });

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
