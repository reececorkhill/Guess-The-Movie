$(document).ready(function () {
    var startScreen = $("#start-screen");
    var gameScreen = $("#game-screen");
    var endScreen = $("#end-screen");
    var feedbackScreen = $("#feedback");
    var startBtn = $("#startBtn");
    var customProgressBar = $("#customProgressBar");
    var timeSpan = $("#time");
    var actors = $("#actors");
    var answerOptions = $("#answerOptions");
    var clue2Btn = $("#clue2");
    var genre = $("#genre");
    var clue3Btn = $("#clue3");
    var plot = $("#plot");
    var nextQBtn = $("#nextQBtn");
    var option4 = $("#option4");

    var progressPercentage = 0;
    var timerInterval;
    var secondsLeft = 60;
    var timeEl = $("#time");
    var currentQuestionIndex = 0;

    $("#game-screen, #feedback, #end-screen").addClass("hide");

    startBtn.click(startGame);
    clue2Btn.click(showGenreAndClue3);
    clue3Btn.click(showPlotAndHideClue3);
    option4.click(showFeedbackAndHideGameScreen);
    posterBtn.click(seePoster);
    nextQBtn.click(moveToNextQuestion);
    submitUserNameBtn.click(submit);

    function startGame() {
        startScreen.addClass('hide');
        gameScreen.removeClass('hide');
        actors.removeClass('hide');
        answerOptions.removeClass('hide');
        clue2Btn.removeClass('hide');
        startTimer();
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.text(secondsLeft);

            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                showEndScreen();
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resumeTimer() {
        startTimer();
    }

    function showGenreAndClue3() {
        genre.removeClass('hide');
        clue3Btn.removeClass('hide');
        clue2Btn.addClass('hide');
    }

    function showPlotAndHideClue3() {
        plot.removeClass('hide');
        clue3Btn.addClass('hide');
    }

    function showFeedbackAndHideGameScreen() {
        gameScreen.addClass('hide');
        feedbackScreen.removeClass('hide');
        pauseTimer(); // Stop the timer
    }

    function moveToNextQuestion() {
        feedbackScreen.addClass('hide');
        resumeTimer(); // Continue the timer
        currentQuestionIndex++;
        // check if all 10 questions have been asked
        // if current question is less than Q10
        if (currentQuestionIndex < 10) {
             // Increment progress by 10%
            progressPercentage += 10;
            // Update the progress bar
            customProgressBar.css("width", progressPercentage + "%").attr("aria-valuenow", progressPercentage).text(progressPercentage.toFixed(0) + "%");
            // update the with the next question and clues
            NextQuestion();
        } else {
            // Set progress to 100% explicitly
            progressPercentage = 100;
            // Update the progress bar
            customProgressBar.css("width", progressPercentage + "%").attr("aria-valuenow", progressPercentage).text(progressPercentage.toFixed(0) + "%");
            // all questions have been asked, display the end screen
            pauseTimer();
            gameScreen.addClass("hide");
            endScreen.removeClass("hide");
            // logic for submitting scores will go here
        }

    }

    function seePoster(){
          // Hiding the Gif when the user clicks "See Poster".
          $("#giphyImg").addClass("hide");
        
          // Showing the Poster when the user clicks "See Poster".
          $("#posterImg").removeClass("hide");
    }

    function submit(){

    }
});

