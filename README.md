# Beep&Boop

#### This project will change numbers to Beeps and Boops, 4/05/19


#### By _**Brendan Hellar**_

## Description


#### This project will change certain numbers to words.  The number 1 will be changed to "Beep".  The number 2 will change to "Boop". The number 3 will change to the sentence "I'm sorry, Dave. I'm afraid I can't do that."

### This portion will take the inputted numbers and then return the number and all numbers that lead up to that number.
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
=======

## Setup/Installation Requirements

-   Please clone from the Github repo
-   Click on the link provided

This app requires the internet as it uses HTMl and CSS and Javascript.

## Known Bugs

No known bugs

## Support and contact details

If you have any issues please contact Brendan Hellar at bwhellar@gmail.com or Crystal Fecteau at Crystal_Fecteau@ymail.com

## Technologies Used

HTML and CSS and Javascript

### License

MIT

Copyright (c) 2019 **Brendan Hellar & Crystal Fecteau**
