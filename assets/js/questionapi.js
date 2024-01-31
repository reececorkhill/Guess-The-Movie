$(document).ready(function() {                                                                                          // Checking the document is ready.

    console.log("Working..."); // If console log shows, document is ready.

    var listOfMovies = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    var testMovie = "Avatar";
    var queryURL = "https://www.omdbapi.com/?t=" + testMovie + "&apikey=trilogy";

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);                            // Console logging the data object from response.

      var actors = data.Actors;                     // Extracting the Actors from response.
      console.log(actors);                          // Console logging the actors.
   
      var genres = data.Genre;                      // Extracting the Genre from response.
      console.log(genres);                          // Console logging the genres.

      var plot = data.Plot;                         // Extracting the Plot from response.
      console.log(plot);                            // Console logging the plot.

      var posterSource = data.Poster;               // Extracting the Poster Source from response.
      console.log(posterSource);                    // Console logging the poster source.

      var posterDiv = $("<div>")
      var posterImage = $(`<img src="${posterSource}">`)
      posterDiv.append(posterImage);
      $("#start-screen").append(posterDiv);
    });
});