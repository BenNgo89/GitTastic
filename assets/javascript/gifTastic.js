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
        for (var i = 0; i < results.length; i++){
            var topicDic = $("<div class='col-md-4'>");

            var rating = results[i].rating;
            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;
            var image = $("<img>");
            var p = $("<span>").text("Rating " + rating);

            image.attr("src", still);
            image.addClass("Giphy");
            image.attr("data-state", "still");
            image.attr("data-still", "still");
            image.attr("data-animate", "animated");
            topicDiv.append(p);
            topicDiv.append(image);
            

        }

    })
});