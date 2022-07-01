let weather = {
    "appKey": "8e24ddaf6d4a67c768a2caf53b915b07",

    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid=" + this.appKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".weatherPlace").innerHTML = name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".weatherVibe").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed : " + speed + "km/hr";
        document.querySelector(".weatherNav").style.background = "url('https://source.unsplash.com/random/1500×750/?"+name+"')";
        document.querySelector(".weatherNav").style.backgroundRepeat = "no-repeat";
        document.querySelector(".weatherNav").style.backgroundSize = " 100% 100%";

    },
    search: function () {
        this.fetchWeather(document.querySelector(".placeSearch").value)
    }

}

const placeBtn = document.querySelector(".placeBtn");
const placeSearch = document.querySelector(".placeSearch");

placeBtn.addEventListener("click", function () {
    weather.search();
    preloader.style.display= "block";
});


placeSearch.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
        preloader.style.display= "block";
        
    }
});
weather.fetchWeather("Dehradun")

const preloader= document.querySelector(".preloader")

window.onload = function(){
    setInterval(function(){
        preloader.style.display= "none";
    }, 2500);
 };