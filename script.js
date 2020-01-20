var uvIndex = $(".uv-index");

$(document).ready(function () {
  $("#search").on("click", function () {
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
    }).then(function (response) {
      // clear search 
      $('#searched').val("")

      // console.log(queryURL);
      // console.log(response);

      $(".city").html("<h1>" + response.name + "</h1>" + "<h5>" + moment().format('MMMM Do YYYY') + "</h5>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

      // temp 2 kelvin
      var tempF = (response.main.temp - 273.15) * 1.8 + 32;
      $(".tempF").text("Temperature (Kelvin) " + tempF);

      // UV Index loc
      var lat = response.coord.lat
      var lon = response.coord.lon
      uvIn(APIKey, lat, lon)


      var searches = $('#search').map(function () {
        return $(this).val();
      }).toArray();

    });

    // UV Index
    function uvIn(APIKey, lat, lon, ) {
      var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {
          uvIndex.text(" UV index : " + response.value)
        });

    };
  })
});

//Searched Cities
$('#search').on('click', function (event) {
  event.preventDefault();
  var searchedCities = $(".lookup").val();

  //create button
  var btn = document.createElement("BUTTON");
  btn.innerHTML = searchedCities;
  $("#results").append(btn);

  // local storage
  localStorage.setItem(
    "searched",
    JSON.stringify(searchedCities)
  )

  //display history
  // function getHistory() {
  //   var history = JSON.parse(localStorage.getItem("searched"));
  //   var btn = document.createElement("BUTTON");
  //   btn.innerHTML = history;
  //   $("#results").append(btn);
  // }


  //5 Day Forecast
  $(document).ready(function () {
    $("#search").on("click", function () {
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
      }).then(function (response) {
        // DAY 1
        var date1 = response.list[7].dt_txt;
        date1 = moment.parseZone(date1).format('MMM Do');
        $("#date1").text(date1)
        $("#weather1").text(response.list[7].weather[0].main)
        $("#temp1").text("temp: " + response.list[7].main.temp)
        $("#hum1").text("humidity: " + response.list[7].main.humidity)

        // DAY 2
        var date2 = response.list[14].dt_txt;
        date2 = moment.parseZone(date2).format('MMM Do');
        $("#date2").text(date2);
        $("#weather2").text(response.list[14].weather[0].main)
        $("#temp2").text("temp: " + response.list[14].main.temp)
        $("#hum2").text("humidity: " + response.list[14].main.humidity)

        // DAY 3
        var date3 = response.list[22].dt_txt;
        date3 = moment.parseZone(date3).format('MMM Do');
        $("#date3").text(date3);
        $("#weather3").text(response.list[22].weather[0].main)
        $("#temp3").text("temp: " + response.list[22].main.temp)
        $("#hum3").text("humidity: " + response.list[22].main.humidity)

        // DAY 4
        var date4 = response.list[30].dt_txt
        date4 = moment.parseZone(date4).format('MMM Do');
        $("#date4").text(date4);
        $("#weather4").text(response.list[30].weather[0].main)
        $("#temp4").text("temp: " + response.list[30].main.temp)
        $("#hum4").text("humidity: " + response.list[30].main.humidity)

        // DAY 5
        var date5 = response.list[38].dt_txt
        date5 = moment.parseZone(date5).format('MMM Do');
        $("#date5").text(date5);
        $("#weather5").text(response.list[38].weather[0].main)
        $("#temp5").text("temp: " + response.list[38].main.temp)
        $("#hum5").text("humidity: " + response.list[38].main.humidity)

        console.log(response);


      })
    })
  })
})
