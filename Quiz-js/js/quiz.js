
var questions = [
    ['How many states are in the US?', 50],
    ['How many continents are there?', 7],
    ['HOw many legs does an insect have?', 6]
];

var correctAnswers = 0;
var questions;
var answer;
var response;
var html;



function print(message) {
  document.write(message);
}

for ( var i =0; i< quetsions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(questions);
  response = parseInt(response);

  if(response === answer) {
    correctAnswers += 1;
  }
}

html = "You got" + correctAnswers + "question(s) right";
print(html);
