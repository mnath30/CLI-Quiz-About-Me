var readlinesync=require('readline-sync');

var name=readlinesync.question("Please enter your name ");
console.log(`Hi there ${name}. Let's see how well do you know Maitreyee.`);

//keeping user's score
var score=0;

//high score
var highScore={
  name:'Maitreyee',
  score:3
}

//function to take check questions againse answers
function check(question,answer){
 var answerEntered=readlinesync.question(question);
 if (answerEntered.toLowerCase()===answer){
   console.log(`You are absolutely correct!
   --------------------------------------------`);
   score++;
 }
 else{
   console.log(`Oops that is not correct
   --------------------------------------------`);
 }
}

//creating objects of questions
var questionOne={
  question:"Which is her favourite colour? \n",
  answer:"black"
}

var questionTwo={
  question:"Where does she work? \n",
  answer:'tcs'
}

var questionThree={
  question:'Which is her favourite holiday destination? (Mountains or beaches or forests) \n',
  answer:'beaches'
}

//creating array of questions
var questionArray=[questionOne,questionTwo,questionThree];

//iterating through questionArray and calling the function
for (var i=0;i<questionArray.length;i++){
  var currentQuestion=questionArray[i];
  check(currentQuestion.question,currentQuestion.answer);
}

console.log("Yay you completed the quiz. Your score is "+ score);
console.log(`Our high scorer is ${highScore.name} :  ${highScore.score}`);

//compare with high score
if (score>=highScore.score){
  console.log("Yay you have beat the high score. Send me a screenshot so I can update your name.");
}
