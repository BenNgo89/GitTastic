$(document).ready(function() {
    //Array for searched topics to be added
    var topics = [];

    function displayGIFS() {
        var x = $(this).data("search");
        console.log(x);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "api_key=3AgvzhSyp7NTAzggZ76ghJLtulTjG7ZV";

    console.log(queryURL);
    };

    $ajax ({
        url: queryURL,
        method: "Get"
    }).done(function(response) {
        var results = response.data;
        console.log(results);

    })
});