
$(document).ready(function() {
  $("#search").on("click", function() {
    var inputValue = $("#search")
      .parent()
      .prev()
      .val();
    event.preventDefault();

    var APIKey = "e7196856e41701aad2ab6aa22965b557";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&units=imperial&appid=" +
      APIKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        // $("#search").text(JSON.stringify(response));

      console.log(queryURL);
      console.log(response);

      $(".city").html("<h1>" + response.name + "</h1>" + "<h5>" + moment().format('MMMM Do YYYY') + "</h5>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

      // temp 2 kelvin
      var tempF = (response.main.temp - 273.15) * 1.8 + 32;
      $(".tempF").text("Temperature (Kelvin) " + tempF);


      var searches = $('#search').map(function() {
        return $(this).val();
    }).toArray();


       

        // $('#search').on('click', '#button');
        function searchedCities() {
            var $btn = $('<button/>', {
                text: inputValue,
                id: 'btn_search'
            });
            return $btn;
            var next = $(".row").empty();
            next.append(btn).appendTo( $('#results'))
            
        }

       

        
    

    });
  });
});

 //5 Day Forecast
 $(document).ready(function() {
    $("#search").on("click", function() {
      var inputValue = $("#search")
        .parent()
        .prev()
        .val();
      event.preventDefault();
  
      var APIKey = "e7196856e41701aad2ab6aa22965b557";
      var queryURL =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        inputValue +
        "&units=imperial&appid=" +
        APIKey;
  
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
  
        console.log(queryURL);
        console.log(response);

        // day 1 - date
        $("one").html(response.list[0].weather[0]);
        // day 2 - date

        // day 3 - date


    //   $(".wind").text("Wind Speed: " + response.wind.speed);
    //   $(".humidity").text("Humidity: " + response.main.humidity);
    //   $(".temp").text("Temperature (F) " + response.main.temp);

      })
    })
})
