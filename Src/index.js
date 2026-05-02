function refreshWeather(response) {
    let temperatureElement=document.querySelector("#temp");
    let temperature=response.data.temperature.current;
    let cityElement=document.querySelector("#city");

    cityElement.innerHTML=response.data.city;
    temperatureElement.innerHTML=Math.round(temperature);
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
