const apikey = "5c59994df6bb603a2803f6bdb022fd1b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    let data = null;

    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        data = await response.json();

        console.log(data);

        // Update the DOM inside the function
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
    
    if (data && data.weather && data.weather[0]) {
        if (data.weather[0].main == "Clouds") {
            weathericon.src = "weather-app-img/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weathericon.src = "weather-app-img/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weathericon.src = "weather-app-img/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "weather-app-img/weather-app-img/images/drizzle.png";  
        } else if (data.weather[0].main == "Mist") {
            weathericon.src = "weather-app-img/images/mist.png"; 
        }
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
