let userName = 'Aziz'; // input User name
userName ? console.log(`Hello ${userName}!`) //  ternary expression chousing  how say "hello"
  : console.log('Hello!');

let userQuestion = 'Where is true?'; // Question from user
console.log(userQuestion);

let randomNumber = Math.floor(Math.random()*8); // Create random number
 //console.log(randomNumber); // Check correct work of numbergen

let eightBall = '';

switch (randomNumber) {
  case 1 :
 eightBall = 'It is certain';
  break;
  case 2 : 
  eightBall = 'It is decidely so';
  break;
  case 3 : 
  eightBall = 'Reply hazy try again';
  break;
  case 4 : 
  eightBall = 'Cannot ppredict now';
  break;
  case 5 : 
  eightBall = 'Do not count on it';
  break;
  case 6 : 
  eightBall = 'My sorces say no';
  break;
  case 7 : 
  eightBall = 'Outlook not so good';
  break;
  case 8 : 
  eightBall = 'Sighn point to yes';
  break;
  default : 
  eightBall = 'Eight error';
  break;
}
console.log(eightBall); // It is unswer on the question  
