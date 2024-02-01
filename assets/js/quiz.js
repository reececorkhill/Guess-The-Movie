var secondsLeft = 60;
var timeEl = $("#time");

$("#startBtn").on('click', function() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.text(secondsLeft);

        if (secondsLeft <= 0) {
            // Clear when time runs out
            clearInterval(timerInterval);

            // Display end screen here maybe gif beforehand?
        }
    }, 1000);

    // Hide start screen and show game screen
    $("#start-screen").addClass("hide");
    $("#game").removeClass("hide");
    $("#heading").removeClass("hide");

    // Show the first clue
    $("#firstclue").removeClass("hide");

    // Logic to handle user's answer (correct answer)
    $("#option1").on('click', function() {
        // Handle correct answer logic here
        // For example, hide current clue and show feedback
        $("#firstclue").addClass("hide");
        $("#feedback").removeClass("hide");
    });

    // Logic to handle user's incorrect answer (incorrect answer)
    // Will eventually just do an ELSE statement but just for now to see if it works...
    $("#option2").on('click', function() {
        // Handle incorrect answer logic here
        // For example, hide current clue and show next clue
        $("#firstclue").addClass("hide");
        $("#secondClue").removeClass("hide");
    });

    // Add logic for other options and clues

    // Logic to handle next button click
    $("#next").on('click', function() {

        // Need to add logic to show next question or end game
    });
});

// Add logic for displaying the end screen, submitting scores, etc.
