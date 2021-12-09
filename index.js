var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hey😊 ' + userName + '!');

var readlineSync = require('readline-sync');
var score = 0;
l

var questiontwo = "What is my BirthMonth? ";
var answertwo ="march";

var useranswer = readlineSync.question(questiontwo);
console.log("you entered " + useranswer);
if (useranswer===answertwo) {
  console.log("you are right😊!");
  score = score +1;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's March")
  score = score -0;
  console.log("score is: " + score)
}

console.log("-------------------")

var questionthree = "My favourate marvel character? ";
var answerthree ="iron man";
var useranswer = readlineSync.question(questionthree);
console.log("you entered " + useranswer);
if (useranswer===answerthree) {
  console.log("you are right😊!");
  score = score +1;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's iron man")
  score = score -0;
  console.log("score is: " + score)
}

console.log("-------------------")

var questionfour = "Which city i did my graduation? ";
var answerfour ="lucknow";
var useranswer = readlineSync.question(questionfour);
console.log("you entered " + useranswer);
if (useranswer===answerfour) {
  console.log("you are right😊!");
  score = score +1;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's lucknow")
  score = score -0;
  console.log("score is: " + score)
}

console.log("-------------------")

var questionfive = "My college name? ";
var answerfive ="bncet";
var useranswer = readlineSync.question(questionfive);
console.log("you entered " + useranswer);
if (useranswer===answerfive) {
  console.log("you are right😊!");
  score = score +1;
  console.log("score is: " + score)
} else {
   console.log("you are e wrong☹️");
   console.log("it's bncet")
  score = score -0;
  console.log("score is: " + score)
}