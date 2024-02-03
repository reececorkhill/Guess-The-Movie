$(document).ready(function () {


    var secondsLeft = 60;  //timer length - can be changed
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

            if (secondsLeft <= 0) {
                // Clear when time runs out
                clearInterval(timerInterval);

                //show end screen when timer runs out
                showEndScreen();
        
            }
        }, 1000);
    }

    // Function to pause the timer -- call this function when feedback is displayed (when an option is selected)
    function pauseTimer() {
        clearInterval(timerInterval);
    }

    // Function to resume the timer -- call this function when nextQBtn is clicked
    function resumeTimer() {
        startTimer();
    }


    //start button functionality
    $("#startBtn").on('click', function () {
        //begin timer
        startTimer();

        // Hide start screen and show game screen
        $("#start-screen").addClass("hide");
        $("#game-screen").removeClass("hide");

        // Show the first clue
        $("#actors").removeClass("hide");


    });

    // give me another clue btn
    $("#clue2").on('click', function () {

        //hide 1st clue
        $("#actors").addClass("hide");
        $("#actorsOptions").addClass("hide");


        //show 2nd clue
        $("#clue2").addClass("hide");
        $("#genre").removeClass("hide");
        $("#genreOptions").removeClass("hide");
        $("#clue3").removeClass("hide");


    });

    // one more clue btn
    $("#clue3").on('click', function () {

        //hide 1st clue
        $("#genre").addClass("hide");
        $("#genreOptions").addClass("hide");



        //show 2nd clue
        $("#clue3").addClass("hide");
        $("#plot").removeClass("hide");
        $("#plotOptions").removeClass("hide");

    });

    // pretending option 4 is correct answer FOR NOW
    $("#sadFeedback").addClass("hide");
    $("#happyFeedback").addClass("hide");


    $("#plotOptions, #option4").on('click', function () {

        //hide question
        $("#plot").addClass("hide");
        $("#plotOptions").addClass("hide");



        //show feedback
        $("#feedback").removeClass("hide");
        $("#happyFeedback").removeClass("hide");

    });

    $("#posterBtn").on('click', function () {

        //hide gif
        $("#giphyImg").attr("src", "POSTER FROM API")
        $("#giphyImg").attr("alt", "POSTER FROM API")

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

            // update the with the next question and clues
            NextQuestion();

        } else {
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
        $("#actorsOptions").removeClass("hide");
        $("#clue2").removeClass("hide");
        $("#genre").addClass("hide");
        $("#genreOptions").addClass("hide");
        $("#plot").addClass("hide");
        $("#plotOptions").addClass("hide");
        $("#clue3").addClass("hide");
        // we should update clues and options for each question -- new movie every time
    }




    function showEndScreen() {
        $("#game-screen").addClass("hide");
        $("#feedback-screen").addClass("hide");
        $("#end-screen").removeClass("hide");
    }





}); 