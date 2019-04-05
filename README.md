# Beep&Boop

#### This project will change numbers to Beeps and Boops, 4/05/19


#### By _**Brendan Hellar**_

## Description


#### This project will change certain numbers to words.  The number 1 will be changed to "Beep".  The number 2 will change to "Boop". The number 3 will change to the sentence "I'm sorry, Dave. I'm afraid I can't do that."

###### This portion will take the inputted numbers and then return the number and all numbers that lead up to that number.
```
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
```
###### This portion looks to find numbers and replace them with the appropriate words.
```
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
```
###### This portion is the fron end logic that will enable the functions to activate on keyup.
```
$(document).ready(function() {
  $("#num").keyup(function(event){
    event.preventDefault();
    $("#result").html(count($("#num").val())); alter();
  })
```
=======

## Setup/Installation Requirements

-   Please clone from the Github repo https://bwhellar.github.io/portfolioproject3/
-   Input numbers into the input box

This app requires the internet as it uses HTMl and CSS and Javascript.

## Known Bugs

No known bugs

## Support and contact details

If you have any issues please contact Brendan Hellar at bwhellar@gmail.com

## Technologies Used

HTML and CSS and Javascript

### License

MIT

Copyright (c) 2019 **Brendan Hellar**
