$(document).ready(function() {                                                                                          // Checking the document is ready.
    clearScreen();                                                                                                      // Calling the clearScreen TEST FUNCTION.

    var listOfMovies = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]                                     // Example array for movie list...
    var testMovie = "Avatar";                                                                                           // Search Term Variable.
    var queryURL = "https://www.omdbapi.com/?t=" + testMovie + "&apikey=trilogy";                                       // Query URL with movie.

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        
        console.log(data);                                                                                              // Console logging the data object from response.

        // Variables for Response Data - START
        var title = data.Title;                                                                                         // Extracting the Title from response.
        console.log(title);                                                                                             // Console logging the title.

        var actors = data.Actors;                                                                                       // Extracting the Actors from response.
        console.log(actors);                                                                                            // Console logging the actors.
    
        var genres = data.Genre;                                                                                        // Extracting the Genre from response.
        console.log(genres);                                                                                            // Console logging the genres.

        var plot = data.Plot;                                                                                           // Extracting the Plot from response.
        console.log(plot);                                                                                              // Console logging the plot.

        var posterSource = data.Poster;                                                                                 // Extracting the Poster Source from response.
        console.log(posterSource);                                                                                      // Console logging the poster source.
        // Variables for Response Data - END
        
        // Variables for Dynamic Elements - START
        var movieDiv = $("<div>");                                                                                      // Creating a movie div.

        var movieTitleH1 = $("<h1>");                                                                                   // Creating a H1 element for the movie title.
        movieTitleH1.text(title);                                                                                       // Adding the title from API data.
        movieDiv.append(movieTitleH1);                                                                                  // Appending the H1 element to the movie div.

        var actorsH4 = $("<h4>");                                                                                       // Creating a H4 element for the actors.
        actorsH4.text(actors);                                                                                          // Adding the actors from API data.
        movieDiv.append(actorsH4);                                                                                      // Appending the H4 element to the movie div.

        var genreH4 = $("<h4>");                                                                                        // Creating a H4 element for the genres.
        genreH4.text(genres);                                                                                           // Adding the genres from API data.
        movieDiv.append(genreH4);                                                                                       // Appending the H4 element to the movie div.

        var plotP = $("<p>");                                                                                           // Creating a P element for the plot.
        plotP.text(plot);                                                                                               // Adding the plot from API data.
        movieDiv.append(plotP);                                                                                         // Appending the P element to the movie div.

        var posterImg = $(`<img src="${posterSource}">`);                                                               // Creating an Img element for the plot with a src link of the poster.
        movieDiv.append(posterImg);                                                                                     // Appending the Img element to the movie div.

        $("body").append(movieDiv);                                                                                     // Appending the movie div to the body.
        // Variables for Dynamic Elements - END
    });

    function clearScreen () {                                                                                           // Test function to clear the current elements being displayed.
        $(".wrapper").addClass("hide");
    }    
});