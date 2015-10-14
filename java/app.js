var score = 0;
var userAnswer = "answerA";
var difficulty = 9
var lowerLimit = 1
var stage;

window.onload = function(){

  stage = new swiffy.Stage(document.getElementById('swiffycontainer'), swiffyobject, {});
  stage.start();

  document.getElementById("multiply").addEventListener("click", function(){
    document.getElementById("multiply").style.visibility = "hidden";
    document.getElementById("add").style.visibility = "hidden";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("In").style.visibility = "hidden";
    document.getElementById("Five").style.visibility = "hidden";
    document.getElementById("logo").style.display = "block";

    startTimer();
    quizMultiplication();
  });

    document.getElementById("add").addEventListener("click", function(){
    document.getElementById("add").style.visibility = "hidden";
    document.getElementById("multiply").style.visibility = "hidden";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("In").style.visibility = "hidden";
    document.getElementById("Five").style.visibility = "hidden";
    document.getElementById("logo").style.display = "block";

    startTimer();
    quizAddition();
  });

  $('body').on("click", '#answerA', chooseCorrectAnswer);
  $('#playAgain').on("click", reloadPage);
  $('body').on("click", '#answerB', chooseAnswer);
  $('body').on("click", '#answerC', chooseAnswer);
  $('body').on("click", '#answerD', chooseAnswer);
}

/******************************************************************************/
// FUNCTIONS
/******************************************************************************/

function quizAddition(){
  var classArray = [0,1,2,3];
  var boxes =["answerA", "answerB", "answerC", "answerD"];
  var randomBoxes = [];
  var operators = ["+","*"];
  var answerA;
  var answerB;
  var answerC;
  var answerD;

  function pickFromArray() {
    var number = classArray[Math.floor(Math.random() * classArray.length)]
    var index = classArray.indexOf(number)
    if (index > -1) {
      classArray.splice(index, 1);
    }
    randomBoxes.push(boxes[number])
  }

  pickFromArray();
  pickFromArray();
  pickFromArray();
  pickFromArray();

  var randomAnswerCombo1 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var randomAnswerCombo2 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var randomAnswerCombo3 = (Math.floor(Math.random() * difficulty)+lowerLimit);

  document.getElementById("count").style.visibility = "visible";
  var randomNumber1 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var randomOperator = operators[0];
  var randomNumber2 = (Math.floor(Math.random() * difficulty)+lowerLimit);
  var answer;
  document.getElementById("question").innerHTML = randomNumber1+ " " +randomOperator+ " " +randomNumber2;
  if (randomOperator ==='*') {
    answer = randomNumber1 * randomNumber2;
  }
  else if (randomOperator === '+'){
    answer = randomNumber1+randomNumber2;
  }
  document.getElementById("score").innerHTML = "score" + " " + "=" + " " + score;
  $('#answers').append('<li id="'+randomBoxes[0]+'" class="wrongAnswer"></li><li id="'+randomBoxes[1]+'" class="wrongAnswer"></li><li id="'+randomBoxes[2]+'" class="correctAnswer"></li><li id="'+randomBoxes[3]+'" class="wrongAnswer"></li>')
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerA")]).innerHTML = answer;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerB")]).innerHTML = answer + randomAnswerCombo1;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerC")]).innerHTML = answer - randomAnswerCombo2;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerD")]).innerHTML = answer + randomAnswerCombo3;
}

function quizMultiplication(){
  var classArray = [0,1,2,3];
  var boxes =["answerA", "answerB", "answerC", "answerD"];
  var randomBoxes = [];

  var operators = ["+","*"];
  var answerA;
  var answerB;
  var answerC;
  var answerD;

  function pickFromArray() {
    var number = classArray[Math.floor(Math.random() * classArray.length)]
    var index = classArray.indexOf(number)
    if (index > -1) {
      classArray.splice(index, 1);
    }
    randomBoxes.push(boxes[number])
  }

  pickFromArray();
  pickFromArray();
  pickFromArray();
  pickFromArray();

  var randomAnswerCombo1 = (Math.floor(Math.random() * 10)+1);
  var randomAnswerCombo2 = (Math.floor(Math.random() * 10)+1);
  var randomAnswerCombo3 = (Math.floor(Math.random() * 10)+1);

  document.getElementById("count").style.visibility = "visible";
  var randomNumber1 = (Math.floor(Math.random() * 10)+1);
  var randomOperator = operators[1];
  var randomNumber2 = (Math.floor(Math.random() * 10)+1);
  var answer;
  
  document.getElementById("question").innerHTML = randomNumber1+ " " +randomOperator+ " " +randomNumber2;
  
  if (randomOperator ==='*') {
    answer = randomNumber1 * randomNumber2;
  }
  else if (randomOperator === '+'){
    answer = randomNumber1+randomNumber2;
  }
  
  document.getElementById("score").innerHTML = "score;" + score;
  
  $('#answers').append('<li id="'+randomBoxes[0]+'" class="wrongAnswer"></li><li id="'+randomBoxes[1]+'" class="wrongAnswer"></li><li id="'+randomBoxes[2]+'" class="correctAnswer"></li><li id="'+randomBoxes[3]+'" class="wrongAnswer"></li>')
  
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerA")]).innerHTML = answer;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerB")]).innerHTML = answer + randomAnswerCombo1;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerC")]).innerHTML = answer - randomAnswerCombo2;
  document.getElementById(randomBoxes[randomBoxes.indexOf("answerD")]).innerHTML = answer + randomAnswerCombo3;
}

function startTimer(){
  $('#clockVideo')[0];
  var clicked = 0;

  $('body').on('click', '#answerB', clicked = "clicked");
  $('body').on('click', '#answerC', clicked = "clicked"); 
  $('body').on('click', '#answerD', clicked = "clicked"); 
  console.log(clicked);
  var counter = 5;

  var A = setInterval(function() {
    counter--;

    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }  

    $('body').on("click", '#answerA', function () {
      $('#clockVideo').get(0).currentTime = 0;
      clearInterval(A);
    });
  }, 1000);
}   

function clearAnswer(){
  document.getElementById("count").innerHTML = "<img src='./java/face.png' width='200' height='200' />";
  document.getElementById("answerA").style.visibility = "hidden";
  document.getElementById("answerB").style.visibility = "hidden";
  document.getElementById("answerC").style.visibility = "hidden";
  document.getElementById("answerD").style.visibility = "hidden";
}

function chooseCorrectAnswer(){
  
  score++;
  if(score % 5 === 0){
    lowerLimit = lowerLimit + difficulty - 1
    difficulty = difficulty*2
  }
  console.log(score)
  userAnswer = this.id
  console.log(userAnswer)
  $('ul').children("li").remove();
  clearInterval();
  startTimer();
  quizAddition();
}

function chooseAnswer(){
  userAnswer = this.id
  clearAnswer();
  document.getElementById("question").style.visibility = "hidden";
}

function reloadPage(){
  location.reload();
}


