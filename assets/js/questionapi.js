$(document).ready(function() {                                                                                                                                  // Checking the document is ready.

    var movieArray = ["Poor Things","Saltburn","The Lord of the Rings: The Fellowship of the Ring","Django Unchained","Finding Nemo","The Beach","Shutter Island","Titanic","Home Alone","Superbad","Shrek","Pinapple Express","Legally Blonde","Lara Croft: Tomb Raider","Good Will Hunting","Up","Bee Movie","Interstellar","Fight Club","Fear and Loathing in Las Vegas","Click","Kill Bill","Cast Away","Blow","American Psycho","A Nightmare on Elm Street","Pulp Fiction", "The Terminator", "The Dark Knight Rises", "Saving Private Ryan", "Toy Story", "Zombieland", "The Gentlemen", "The Conjuring", "Black Hawk Down", "Avatar The Way of Water"];                                                                          
    var movieSelector = movieArray[Math.floor(Math.random() * movieArray.length)];    
                                                                       // Getting random movie name from movieArray and setting it as the movieSelector variable.
    var giphyApiKey = "nZcsHdIXJYfHdyt5y85wKNj1pmrGVGBh";                                                                                                       // Giphy API Key.

    function movieFetch (movie) {                                                                                                                               // Defining a function to call the OMDB API (With variable we pass in on call).

        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";                                                                               // Query URL with movie.

        fetch(queryURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            
            // Variables for Response Data - START
            var title = data.Title;                                                                                                                             // Extracting the Title from response.
            var actors = data.Actors;                                                                                                                           // Extracting the Actors from response.
            var genres = data.Genre;                                                                                                                            // Extracting the Genre from response.
            var plot = data.Plot;                                                                                                                               // Extracting the Plot from response.
            var posterSource = data.Poster;                                                                                                                     // Extracting the Poster Source from response.
            // Variables for Response Data - END
            
            // Variables for Dynamic Elements - START
            var movieDiv = $("<div>");                                                                                                                          // Creating a movie div.

            var movieTitleH1 = $("<h1>");                                                                                                                       // Creating a H1 element for the movie title.
            movieTitleH1.text(title);                                                                                                                           // Adding the title from API data.
            movieDiv.append(movieTitleH1);                                                                                                                      // Appending the H1 element to the movie div.

            var actorsP = $("<p>");                                                                                                                             // Creating a P element for the actors.
            actorsP.text(actors);                                                                                                                               // Adding the actors from API data.
            $("#actors").append(actorsP);                                                                                                                       // Appending the P element to the actors div.

            var genreP = $("<p>");                                                                                                                              // Creating a P element for the genres.
            genreP.text(genres);                                                                                                                                // Adding the genres from API data.
            $("#genre").append(genreP);                                                                                                                         // Appending the P element to the genre div.

            var plotP = $("<p>");                                                                                                                               // Creating a P element for the plot.
            plotP.text(plot);                                                                                                                                   // Adding the plot from API data.
            $("#plot").append(plotP);                                                                                                                           // Appending the P element to the plot div.

            $("#posterImg").attr("src", `${posterSource}`);                                                                                                     // Giving the poster image tag a src attribute of the poster source url.
            // Variables for Dynamic Elements - END
        });
    };
    movieFetch(movieSelector);                                                                                                                                  // Calling the movieFetch function and passing in the movieSelector variable.

    function giphyFetch (movie, key) {                                                                                                                          // Defining a function to call the giphy API (With variables we pass in on call).
        
        var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${movie}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`           // Giphy query url.

        fetch(queryURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            var gifImgURL = data.data[0].images.original.url;                                                                                                   // Extracting the gif source url from response.
            $("#giphyImg").attr("src", `${gifImgURL}`);                                                                                                         // Giving the giphy image tag a src attribute of giphy's gif source url.
        });
    }
    giphyFetch(movieSelector, giphyApiKey);          
    // Calling the giphyFetch function (Passing in movieSelector and giphyApiKey).

    //individual options
   var option1 = $("#answerOptions").find("#option1")
   var option2 = $("#answerOptions").find("#option2")
   var option3 = $("#answerOptions").find("#option3")
   var option4 = $("#answerOptions").find("#option4")
   // run each button thru loop
   // all options
   var options = $("#answerOptions").find("button");

   for (i = 0; i < options.length; i++) {
    var randomMovie = movieArray[Math.floor(Math.random() * movieArray.length)];
    $(options[i]).text(randomMovie);
}



 

    // function addMovieOptions() {
    //     var usedMovies = []; // array to keep track of used movie names so they dont duplicate
  

    //     options.each(function() {

    //         var randomMovie

    //         do {
    //             movieSelector
    //         } while (usedMovies.includes(randomMovie));
    //         usedMovies.push(randomMovie);
    //         $(this).text(randomMovie);
            
    //     });
    // }

    // $("#startBtn").on('click', function () {
    //     addMovieOptions()
    // });

    // $("#nextQBtn").on('click', function () {
    //     addMovieOptions()
    // });



   //have 3 movie names from array go to 3 random options



   //have 1 movie from api go to the button that wasn't randomly selected
   //




});