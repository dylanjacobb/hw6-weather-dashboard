var mainWeatherDate = moment().format('MM/DD/YY');

function renderCity() {
    $('.btn').on('click', function () {
        city = $('.input-field').val();
        var appKey = '5d0479bcef657d162bba17e27204ff00'
        var unit = 'imperial';
        var mainWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + appKey + '&units=' + unit;
        var fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + appKey + '&units=' + unit;

        // gets the main weaether data shown
        function mainWeatherData() {
            fetch(mainWeatherURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    var titleEl = document.querySelector('.city-name');
                    var temperatureEl = document.querySelector('.temperature-li');
                    var humidityEl = document.querySelector('.humidity-li');
                    var windSpeedEl = document.querySelector('.wind-speed-li');
                    var citySelector = document.querySelector('.city-name');
                    // var uvIndexEl = document.querySelector('.uv-index-li');
                    citySelector.textContent = (data.name);
                    temperatureEl.textContent = ('Temperature: ' + data.main.temp + '°F');
                    humidityEl.textContent = ('Humidity: ' + data.main.humidity + '%');
                    windSpeedEl.textContent = ('Wind Speed: ' + data.wind.speed + ' MPH');
                    titleEl.textContent = (data.name + ' (' + mainWeatherDate + ')');
                    // TODO: pull another api for the uv index
                    // uvIndexEl.textContent = ('UV Index: ' + data.)
                });
        }
        mainWeatherData();

        // TODO: just create a for-loop nextime...
        function cardWeatherData() {

            fetch(fiveDayURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    var tempOne = document.querySelector('.card-temp-one');
                    var tempTwo = document.querySelector('.card-temp-two');
                    var tempThree = document.querySelector('.card-temp-three');
                    var tempFour = document.querySelector('.card-temp-four');
                    var tempFive = document.querySelector('.card-temp-five');
                    tempOne.textContent = ('Temp: ' + data.list[0].main.temp + '°F');
                    tempTwo.textContent = ('Temp: ' + data.list[4].main.temp + '°F');
                    tempThree.textContent = ('Temp: ' + data.list[9].main.temp + '°F');
                    tempFour.textContent = ('Temp: ' + data.list[14].main.temp + '°F');
                    tempFive.textContent = ('Temp: ' + data.list[19].main.temp + '°F');
                    var humidityOne = document.querySelector('.card-humidity-one');
                    var humidityTwo = document.querySelector('.card-humidity-two');
                    var humidityThree = document.querySelector('.card-humidity-three');
                    var humidityFour = document.querySelector('.card-humidity-four');
                    var humidityFive = document.querySelector('.card-humidity-five');
                    humidityOne.textContent = ('Humidity: ' + data.list[0].main.humidity + '%');
                    humidityTwo.textContent = ('Humidity: ' + data.list[4].main.humidity + '%');
                    humidityThree.textContent = ('Humidity: ' + data.list[9].main.humidity + '%');
                    humidityFour.textContent = ('Humidity: ' + data.list[14].main.humidity + '%');
                    humidityFive.textContent = ('Humidity: ' + data.list[19].main.humidity + '%');

                });
        }
        cardWeatherData();

        // create a for loop for the moment.js dates
        // if uv-index > 4 add class red type of things
        function cardDates() {

            var oneDate = moment().add(1, 'days').format('MM/DD/YY');
            var twoDate = moment().add(2, 'days').format('MM/DD/YY');
            var threeDate = moment().add(3, 'days').format('MM/DD/YY');
            var fourDate = moment().add(4, 'days').format('MM/DD/YY');
            var fiveDate = moment().add(5, 'days').format('MM/DD/YY');
            var firstDate = document.querySelector('.one-date');
            firstDate.textContent = (oneDate);
            var secondDate = document.querySelector('.two-date');
            secondDate.textContent = (twoDate);
            var thirdDate = document.querySelector('.three-date');
            thirdDate.textContent = (threeDate);
            var fourthDate = document.querySelector('.four-date');
            fourthDate.textContent = (fourDate);
            var fifthDate = document.querySelector('.five-date');
            fifthDate.textContent = (fiveDate);
        }
        cardDates();
    })
}
renderCity();


















































// TODO: WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// TODO: WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// TODO: WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe. 

// create using function with if, else if, and else.

// TODO: WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

// TODO: WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city 

// FIXME: not sure to make it so that when you search a city it changes everything else on the page in accordance to that.

// TODO: figure out how to display the rest of the data that's contained inside of weatherEl


// // 5 day forcast url
// var fiveDayForcast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + appKey;
// console.log(fiveDayForcast);

// example given in class
// fetch(cityURL)
//     .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//                 console.log(data);
//                 var weatherEl = document.querySelector('#weather');
//                 console.log(weather);
//                 weatherEl.textContent = parseInt(data.main.temp);
//     });
