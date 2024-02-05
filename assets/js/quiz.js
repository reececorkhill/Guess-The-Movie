$(document).ready(function () {
    var progressPercentage = 0; // Add this line to declare a global variable for progress

    $("#genre").addClass("hide");
    // $("#genreOptions").addClass("hide");

    $("#plot").addClass("hide");
    // $("#plotOptions").addClass("hide");
  
    var secondsLeft = 30;  //timer length - can be changed
    var timeEl = $("#time"); //html for timer

    //hiding all game elements until called
    $("#game-screen").addClass("hide");
    $("#feedback").addClass("hide");
    $("#end-screen").addClass("hide");

    $("#genre").addClass("hide");
    $("#genreOptions").addClass("hide");

    $("#plot").addClass("hide");
    $("#plotOptions").addClass("hide");

    $("#clue3").addClass("hide");


    function startTimer() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.text(secondsLeft);

            if (secondsLeft <= 0 || progressPercentage >= 100){
                // Clear when time runs out
                clearInterval(timerInterval);
                //show end screen when timer runs out
                showEndScreen();
            }
        }, 1000);
    };

    //start button functionality
    $("#startBtn").on('click', function () {
        //begin timer
        startTimer(); // Calling the startTimer function to start the timer.

        // Hide start screen and show game screen
        $("#start-screen").addClass("hide");
        $("#game-screen").removeClass("hide");

        // Show the first clue
        $("#actors").removeClass("hide");

        // Hiding the 2nd and 3rd Clue buttons.
        $("#clue2").addClass("hide");
        $("#clue3").addClass("hide");
    });

    // give me another clue btn
    $("#clue1").on('click', function () {

        //show 2nd clue
        $("#clue1").addClass("hide");
        $("#clue2").removeClass("hide");
        $("#genre").removeClass("hide");
        $("#genreOptions").removeClass("hide");
        //hide 1st clue
        // $("#genre").addClass("hide");
        // $("#genreOptions").addClass("hide");
    });

     // give me another clue btn
     $("#clue2").on('click', function () {

        //show 2nd clue
        $("#clue2").addClass("hide");
        $("#plot").removeClass("hide");
        $("#clue3").removeClass("hide");
        //hide 1st clue
        // $("#genre").addClass("hide");
        // $("#genreOptions").addClass("hide");
    });

    // pretending option 4 is correct answer FOR NOW
    $("#sadFeedback").addClass("hide");
    $("#happyFeedback").addClass("hide");


    $("#answerOptions, #option4").on('click', function () {

        // Hiding the poster image so only the movie gif displays when answer is clicked.
        $("#posterImg").addClass("hide");

        // If correct answer clicked, hiding the clue buttons.
        $("#clue1").addClass("hide");
        $("#clue2").addClass("hide");

        // If correct answer clicked, hiding the options.
        $("#answerOptions").addClass("hide");

        // If correct answer clicked, hiding the clues.
        $("#actors").addClass("hide");
        $("#genre").addClass("hide");
        $("#plot").addClass("hide");

        // If correct answer clicked, showing the feedback.
        $("#feedback").removeClass("hide");
        $("#happyFeedback").removeClass("hide");

        // If the correct answer clicked, showing the Gif.
        $("#giphyImg").removeClass("hide");

    });

    $("#posterBtn").on('click', function () {

        // Hiding the Gif when the user clicks "See Poster".
        $("#giphyImg").addClass("hide");
        
        // Showing the Poster when the user clicks "See Poster".
        $("#posterImg").removeClass("hide");

    });


    // Next Question button functionality
    var currentQuestionIndex = 0;

    $("#nextQBtn").on('click', function () {

        //hide feedback
        $("#feedback").addClass("hide");

        //start new question from beginning
        $("#game-screen").removeClass("hide");

        // add to the current question index
        currentQuestionIndex++;

        // check if all 10 questions have been asked
        // if current question is less than Q10
        if (currentQuestionIndex < 10) {

             // Increment progress by 10%
            progressPercentage += 10;

            // Update the progress bar
            $("#customProgressBar").css("width", progressPercentage + "%").attr("aria-valuenow", progressPercentage).text(progressPercentage.toFixed(0) + "%");
            // update the with the next question and clues
            NextQuestion();

        } else {
            // Set progress to 100% explicitly
            progressPercentage = 100;
            // Update the progress bar
            $("#customProgressBar").css("width", progressPercentage + "%").attr("aria-valuenow", progressPercentage).text(progressPercentage.toFixed(0) + "%");
            // all questions have been asked, display the end screen
            clearInterval(timerInterval);
            $("#game-screen").addClass("hide");
            $("#end-screen").removeClass("hide");
            // logic for submitting scores will go here
        }
    });

    function NextQuestion() {
        //reset question page
        $("#actors").removeClass("hide");
        $("#answerOptions").removeClass("hide");
        $("#clue1").removeClass("hide");
        // we should update clues and options for each question -- new movie every time
    };

    function showEndScreen() {
        $("#game-screen").addClass("hide");
        $("#feedback-screen").addClass("hide");
        $("#end-screen").removeClass("hide");
    };

});
