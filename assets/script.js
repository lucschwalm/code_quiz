var start = document.getElementById("start");
var questionText = document.getElementById("mainText");
var main = document.getElementById("main");
var answerButtons = document.getElementById("answerButtons");
var timer = document.getElementById("timer");
var isCorrect = document.getElementById("isCorrect");

var question1 = "Commonly used data types do not include:"
var question2 = "The condition in an if/else statement is enclosed by:"
var question3 = "Properties within an object are accessed using: ";
var question4 = "Arrays are enclosed within: ";
var question5 = "An html element can be accessed within javascript using all but: ";
var questions = [question1, question2, question3, question4, question5];
var answers1 = ["strings", "booleans", "alerts", "numbers"];
var answers2 = ["parenthesis", "curly brackets", "brackets", "quotation marks"];
var answers3 = ["types", "keys", "functions", "variables"];
var answers4 = ["brackets", "asterisks", "parenthesis", "semicolons"];
var answers5 = ["getElementbyID()", "getElementsbyClassName()", "getElementsbyTagName()", "getElement()"];
var questionAnswers = [answers1, answers2, answers3, answers4, answers5]; 
var correctAnswers = ["alerts", "parenthesis", "keys", "brackets", "getElement()"];
var questionNum = 0;

function nextQuestion() {
    if(questionNum >= questions.length){
        isCorrect.textContent = "You win!";
        return;
    }
    questionText.textContent = questions[questionNum];
    if(answerButtons.hasChildNodes()) {
        for(var i=0; i<4; i++){
            answerButtons.removeChild(answerButtons.children[0]);
        }
    }
    for(var i=0; i<4; i++){
        var button = document.createElement("button");
        var answers = questionAnswers[questionNum];
        button.textContent = answers[i];
        answerButtons.appendChild(button);
    }
}

function decreaseTime() {
    const intervalId = setInterval(function() { 
        timer.textContent = timer.textContent - 1; 
        if(timer.textContent <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

start.addEventListener("click", function() {
    start.style.display = "none";
    nextQuestion();
    decreaseTime();
});

answerButtons.addEventListener("click", function(event) {
    var element = event.target;
    console.log(element);
    if(element.matches("button") === true) {
        if(element.textContent == correctAnswers[questionNum]){
            isCorrect.textContent = "Correct";
            questionNum++;
            nextQuestion();
        }else{
            isCorrect.textContent = "Incorrect";
            questionNum++;
            nextQuestion();
        }
    }
})