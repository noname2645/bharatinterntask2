const apikey = "5c59994df6bb603a2803f6bdb022fd1b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        const data = await response.json();

        console.log(data);

        // Update the DOM inside the function
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
});



