$(document).ready(function () {

    var score = 30;
    var progressPercentage = 0; // Add this line to declare a global variable for progress

    $("#genre").addClass("hide");
    $("#plot").addClass("hide");

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

    var timerInterval

    function startTimer() {
        timerInterval = setInterval(function () {
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
    };


    // Function to resume the timer -- call this function when nextQBtn is clicked
    function resumeTimer() {
        startTimer();
    };

    //start button functionality
    $("#startBtn").on('click', function () {

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
        score = score - 1;
    });

    // give me another clue btn
    $("#clue2").on('click', function () {

        //show 3rd clue
        $("#clue2").addClass("hide");
        $("#plot").removeClass("hide");
        $("#clue3").removeClass("hide");
        score = score - 1;
    });

    $("#answerOptions").on("click", function (event) {
        var selectedOption = $(event.target).text();
        if (selectedOption === correctAnswer[0]) {
            $("#sadFeedback").addClass("hide");
            $("#happyFeedback").addClass("hide");
            correctFeedback();
        } else {
            $("#sadFeedback").addClass("hide");
            $("#happyFeedback").addClass("hide");
            incorrectFeedback();
        };
    });

    function correctFeedback() {
        // If correct answer clicked, showing happy feedback.
        pauseTimer()
        $("#actors").addClass("hide");
        $("#clue1").addClass("hide");
        $("#clue2").addClass("hide");
        $("#answerOptions").addClass("hide");
        $("#genre").addClass("hide");
        $("#plot").addClass("hide");
        $("#feedback").removeClass("hide");
        $("#happyFeedback").removeClass("hide");
        $("#posterImg").addClass("hide");
    };

    function incorrectFeedback() {
        // If incorrect answer clicked, showing sad feedback.
        pauseTimer()
        $("#actors").addClass("hide");
        $("#clue1").addClass("hide");
        $("#clue2").addClass("hide");
        $("#answerOptions").addClass("hide");
        $("#genre").addClass("hide");
        $("#plot").addClass("hide");
        $("#feedback").removeClass("hide");
        $("#sadFeedback").removeClass("hide");
        $("#posterImg").addClass("hide");
        score = score - 3;
    };

    // Function to resume the timer -- call this function when nextQBtn is clicked
    function resumeTimer() {
        startTimer();
    };

    $("#posterBtn").on('click', function () {

        // Hiding the Gif when the user clicks "See Poster".
        $("#giphyImg").addClass("hide");

        // Showing the Poster when the user clicks "See Poster".
        $("#posterImg").removeClass("hide");

    });


    // Next Question button functionality
    var currentQuestionIndex = 0;

    $("#nextQBtn").on('click', function () {
        getQuestion()
        optionsButtons(questionMovieNames)
        resumeTimer()
        giphyFetch(queryMovie, giphyApiKey);

        //hide feedback
        $("#feedback").addClass("hide");

        //start new question from beginning
        $("#game-screen").removeClass("hide");

        // Display the giphyImg
        $("#giphyImg").removeClass("hide");

        // Hide the posterImg
        $("#posterImg").addClass("hide");

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
            showEndScreen();

            // logic for submitting scores will go here
        }
    });

    function NextQuestion() {
        //reset question page
        $("#actors").removeClass("hide");
        $("#answerOptions").removeClass("hide");
        $("#clue1").removeClass("hide");
        $("#genre").addClass("hide");
        $("#plot").addClass("hide");
    };

    function showEndScreen() {
        $("#game-screen").addClass("hide");
        $("#feedback").addClass("hide");
        $("#end-screen").removeClass("hide");
        $("#final-score").text(score);
    };

    // Function to save user input and score to local storage
    function submitGame() {
        // Get user input from an input field with id "userInput" using jQuery
        var userInput = $('#userInput').val();
        // Get the current score from a local variable.
        var currentScore = score;
        // Retrieve existing scores from local storage or initialize an empty array
        var existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];
        // Check if the name already exist in the scores
        var existingIndex = -1;
        for (var i = 0; i < existingScores.length; i++) {
            if (existingScores[i].name === userInput) {
                existingIndex = i;
                break;
            }
        }
        if (existingIndex !== -1) {
            // If the name already exist, replace the existing score
            existingScores[existingIndex].score = Math.max(existingScores[existingIndex].score, currentScore);
        } else {
            // If the name don't exist, add a new entry with the current score
            existingScores.push({ name: userInput, score: currentScore });
        }
        // Save the updated scores back to local storage
        localStorage.setItem("quizScores", JSON.stringify(existingScores));

        // Redirect to leaderboard.html
        window.location.href = "leaderboard.html";
    }
    // Event listener for the "Submit" button using jQuery
    $("#submitUserNameBtn").on("click", function () {
        // Call the function to save user input and score to local storage
        submitGame();
    });
  
    // Function to retrieve scores from local storage
    function getScores() {
        // Retrieve existing scores from local storage or initialize an empty array
        var existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];
        return existingScores;
    }
    // Function to dynamically create player elements and append to playerContainer
    function displayScores() {
        var scores = getScores();
        var playerContainer = $('.playerContainer');

        // Sort the scores array from higher to lower score
        scores.sort(function(a, b) {
            return b.score - a.score;
        });

        // Clear previous content
        playerContainer.empty();

        // Iterate through the scores and create player elements
        scores.forEach(function (score) {
            // Create a player element
            var playerElement = $('<div class="player">');

            // Determine the image source based on the score
            var imgSrc = score.score < 10 ? './assets/images/raspberryAward.png' : './assets/images/oscarAward.png';

            // Create an image element
            var imgElement = $('<img>').attr('src', imgSrc).attr('alt', 'player');

            // Create game details container
            var gameDetailsElement = $('<div class="game-details">');

            // Create player name and score elements
            var playerNameElement = $('<div class="player-name">').text(score.name);
            var scoreElement = $('<div class="score">').text(score.score);

            // Append elements to the player element
            gameDetailsElement.append(playerNameElement, scoreElement);
            playerElement.append(imgElement, gameDetailsElement);

            // Append player element to the playerContainer
            playerContainer.append(playerElement);
        });
    }

    // Call the function to display scores and create player elements
    displayScores();

    // Event listener for the "PLAY AGAIN" button using jQuery
    $("#playBtn").on("click", function() {
        // Redirect to index.html
        window.location.href = "index.html";
        getQuestion()
    });
});