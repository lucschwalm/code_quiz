var scoresDisplay = document.getElementById("scoresList");
var clearScores = document.getElementById("clear");

function init(){
    let highScores = localStorage.getItem("scores");
    if(highScores == null){
        var score = document.createElement("h2");
        score.textContent = "No scores recorded.";
        scoresDisplay.appendChild(score);
    }else{
        highScores = highScores.split(",");
        console.log(highScores);
        for(let i=0; i<highScores.length; i=i+2){
            var score = document.createElement("h2");
            score.textContent = highScores[i] + ": " + highScores[i+1];
            scoresDisplay.appendChild(score);
        } 
    }
}

clearScores.addEventListener("click", function() {
    localStorage.clear();
    window.location.reload();
});

init();