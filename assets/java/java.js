var pinput;
 $("#submit").on("click", function () {
    pinput=$("#input").val().trim();
    $("#buttons").append("<button class='help'value=" + pinput + ">" + pinput + "</button>");
});
$(".help").on("click", function() {
    var topic = $(this).val();
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=eOByNLszg8x1FBzdJ7fJFq66nIi6WYs6&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
    //var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";


$.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function(response) {
      console.log(response);
  });

});