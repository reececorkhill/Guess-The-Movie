$(document).ready(function() {

    $("#genre").addClass("hide");
    // $("#genreOptions").addClass("hide");

    $("#plot").addClass("hide");
    // $("#plotOptions").addClass("hide");
  
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




    //start button functionality
    $("#startBtn").on('click', function () {
        //begin timer
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timeEl.text(secondsLeft);

            if (secondsLeft <= 0) {
                // Clear when time runs out
                clearInterval(timerInterval);
            // Show the first clue
            // $("#actors").removeClass("hide");
            // Display end screen here maybe gif beforehand?
            }
        }, 1000);

        // Hide start screen and show game screen
        $("#start-screen").addClass("hide");
        $("#game-screen").removeClass("hide");

        // Show the first clue
        $("#actors").removeClass("hide");

        //hide 1st clue
        // $("#actors").addClass("hide");
        // $("#actorsOptions").addClass("hide");


        //show 2nd clue
        $("#clue2").addClass("hide");
        $("#genre").removeClass("hide");
        // $("#genreOptions").removeClass("hide");
        $("#clue3").removeClass("hide");
    });

    $("#clue2").on('click', function () {

        //hide 1st clue
        $("#actors").addClass("hide");
        $("#actorsOptions").addClass("hide");
        

        //show 2nd clue
        $("#clue2").addClass("hide");
        $("#genre").removeClass("hide");
        $("#genreOptions").removeClass("hide");
        $("#clue3").removeClass("hide");
        //hide 1st clue
        // $("#genre").addClass("hide");
        // $("#genreOptions").addClass("hide");
    });

    $("#clue3").on('click', function () {
        //show 2nd clue
        $("#clue3").addClass("hide");
        $("#plot").removeClass("hide");
        // $("#plotOptions").removeClass("hide");
        //hide 1st clue
        $("#genre").addClass("hide");
        $("#genreOptions").addClass("hide");
        $("#answerOptions").removeClass("hide");
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
        $("#giphyImg").attr("src","POSTER FROM API")
        $("#giphyImg").attr("alt","POSTER FROM API")

    });

    $("#nextQBtn").on('click', function () {

        //hide feedback
        $("#feedback").addClass("hide");

        //start new question from beginning
        $("#game-screen").removeClass("hide");

    });



// Add logic for displaying the end screen, submitting scores, etc.
}); 