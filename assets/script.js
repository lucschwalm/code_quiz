var start = document.getElementById("start");
var questionText = document.getElementById("mainText");
var main = document.getElementById("main");
var answerButtons = document.getElementById("answerButtons");
var timer = document.getElementById("timer");
var question1 = "Commonly used data types do not include:"
var questions = [question1];
var answers1 = ["strings", "booleans", "alerts", "numbers"];
var questionAnswers = [answers1]; 

function nextQuestion() {
    start.style.display = "none";
    questionText.textContent = questions[questionNum];
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

questionNum = 0;
start.addEventListener("click", function() {
    nextQuestion();
    decreaseTime();
});

answerButtons.addEventListener("click", function(event) {
    var element = event.target;
    console.log(element);
    if(element.matches("button") === true) {
        if(element.textContent == "alerts"){
            var isCorrect = document.createElement("h4");
            isCorrect.textContent = "Correct";
            main.appendChild(isCorrect);
        }else{
            var isCorrect = document.createElement("h4");
            isCorrect.textContent = "Incorrect";
            main.appendChild(isCorrect);
        }
    }
})