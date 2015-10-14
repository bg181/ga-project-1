var score = 0;
var userAnswer = "answerA";
var difficulty = 9;
var lowerLimit = 1;
var classArray = [0,1,2,3];
var randomBoxes = [];
var boxes =["answerA", "answerB", "answerC", "answerD"];
var answerA;
var answerB;
var answerC;
var answerD;
var answer;
var operators = ["+","*"];

$(function(){
  $("#multiply").on("click", play);
  $("#add").on("click", play);
  $('#playAgain').on("click", reloadPage);
  $('body').on("click", '#answerA', chooseCorrectAnswer);
  $('body').on("click", '#answerB', chooseAnswer);
  $('body').on("click", '#answerC', chooseAnswer);
  $('body').on("click", '#answerD', chooseAnswer);
});

/******************************************************************************/

function play(){
  startTimer()

  if ($(this).attr("id") === "add") {
    randomOperator = operators[0]
  } else if ($(this).attr("id") === "multiply") {
    randomOperator = operators[1]
  } else {
    // randomOperator is still the same
  }

  pickFromArray();
  pickFromArray();
  pickFromArray();
  pickFromArray();

  var randomAnswerCombo1 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var randomAnswerCombo2 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var randomAnswerCombo3 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var randomNumber1 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var randomOperator = operators[0];
  var randomNumber2 = (Math.floor(Math.random() * difficulty)+lowerLimit);

  $("#question").html(randomNumber1+ " " +randomOperator+ " " +randomNumber2);
  
  if (randomOperator ==='*') {
    answer = randomNumber1 * randomNumber2;
  } else if (randomOperator === '+'){
    answer = randomNumber1+randomNumber2;
  }
  
  $('#answers').append('<li id="'+randomBoxes[0]+'" class="wrongAnswer"></li><li id="'+randomBoxes[1]+'" class="wrongAnswer"></li><li id="'+randomBoxes[2]+'" class="correctAnswer"></li><li id="'+randomBoxes[3]+'" class="wrongAnswer"></li>')
  
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerA")]).innerHTML = answer;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerB")]).innerHTML = answer + randomAnswerCombo1;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerC")]).innerHTML = answer - randomAnswerCombo2;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerD")]).innerHTML = answer + randomAnswerCombo3;
}

function startTimer(){
  var counter = 0;
  var A = setInterval(function() {
    counter++;
    $('#clockVideo img').attr("src", "./images/clock" + counter +".png");

    if (counter >= 162) {
      $('#clockVideo img').attr("src", './images/clock1.png');
    }  

    $('body').on("click", '#answerA', function() {
      clearInterval(A);
    });
  }, 30);
}

function clearAnswer(){
  $("#answers").empty();
  $("#question").empty();
  answerA = undefined;
  answerB = undefined;
  answerC = undefined;
  answerD = undefined;
  answer = undefined;
}

function pickFromArray() {
  var number = classArray[Math.floor(Math.random() * classArray.length)]
  var index = classArray.indexOf(number)
  if (index > -1) {
    classArray.splice(index, 1);
  }
  randomBoxes.push(boxes[number])
}

function chooseCorrectAnswer(){
  score++;
  $('#clockVideo img').attr("src", './images/clock1.png');

  if(score % 5 === 0){
    lowerLimit = lowerLimit + difficulty - 1
    difficulty = difficulty*2
  }

  userAnswer = this.id

  $('ul').children("li").remove();
  
  startTimer();
  play();
}

function chooseAnswer(){
  userAnswer = this.id;
  clearAnswer();
}

function reloadPage(){
  location.reload();
}