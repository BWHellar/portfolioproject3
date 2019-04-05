$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val()));
    document.getElementById('result').firstChild.nodeValue = "BOOP";
  })

  function count(num) {
    var priorNum = "";
    var newNum = num;
    for(var i = 1; i <= num; i++) {
      priorNum += i;

      if (i < num) {
        priorNum += ' ';
      }
    }
    return ("" + priorNum);
  }
});
