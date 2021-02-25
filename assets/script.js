var appKey = '5d0479bcef657d162bba17e27204ff00'
// for the search input
// var city = document.querySelector('input-field');
// add var for the input fields so I can add that to the cityURL variable
var city = 'charlotte'
var cityName = document.querySelector('.city-name');
var unit = 'imperial';
// link to the weather thing
var cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + appKey + '&units=' + unit;

var searchButton = document.querySelector('#button-addon2');
// for the displayed date
var date = moment(); $(".displayed-date").text(date.format("MMM Do, YYYY"));
date.textContent = (date);
console.log(date);
console.log(cityURL);

// forcast url
var fiveDayForcast = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + appKey;
console.log(fiveDayForcast);

// adds an even listener to the search button so that when its 'clicked' it'll fetch the data from the weather api link.
searchButton.addEventListener('click', function () {
    fetch(cityURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // this var here is used to dispaly the temperature in text form on the html
            var temperatureLi = document.querySelector('.temperature-li');
            console.log(temperatureLi);
            temperatureLi.textContent = parseInt(data.main.temp);
        });
})

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



// example given in class
// fetch(cityURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         var weatherEl = document.querySelector('#weather');
//         console.log(weather);
//         weatherEl.textContent = parseInt(data.main.temp);
//     });