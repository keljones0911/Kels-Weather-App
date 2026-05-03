function refreshWeather(response) {
    let temperatureElement=document.querySelector("#temp");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#city");
    let date=new Date();
    let timeElement=document.querySelector("#time");
    let descriptionElement=document.querySelector("#description");
    let humidityElement=document.querySelector("#humidity");
    let windElement=document.querySelector("#wind");
    let iconElement=document.querySelector("#icon");

    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
    timeElement.innerHTML=formatDate(date);
    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    windElement.innerHTML=`${response.data.wind.speed}km/h`;
    iconElement.innerHTML=`<img src=${response.data.condition.icon_url} class="weather-icon"/>`;
}
function formatDate(date) {
    let minutes=date.getMinutes();
    let hours=date.getHours();
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[date.getDay()];

    if(minutes <10) {
        minutes=`0${minutes}`;}
    
    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey="0cda4d8bf2fb5c62f231e10o96d9d7ta";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput=document.querySelector("#search-input");
    let cityElement=document.querySelector("#city");
   searchCity(searchInput.value);
}


let searchFormElement=document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");



