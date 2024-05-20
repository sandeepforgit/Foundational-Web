const key = "df434c5307414537ad2105517242005";

const searchTerm = document.getElementById("searchTerm");
const countryName = document.getElementById("countryName");
const regionName = document.getElementById("regionName");
const cityName = document.getElementById("cityName");
const windSpeed = document.getElementById("windSpeed");
const temperature = document.getElementById("temperature"); 
const logoImage = document.getElementById("logoImg");
const condition = document.getElementById("condition");


const weather = async (event) => {
    event.preventDefault();
    if(!searchTerm.value){
        alert("Please enter city name");
        return;
    }
    const city = searchTerm.value;
    const fetchData = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
      );
    const data = await fetchData.json();
    countryName.innerHTML = data.location.country;
    regionName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    windSpeed.innerHTML = data.current.wind_kph + "Kph";
    temperature.innerHTML = data.current.temp_c + " C";
    logoImage.src = data.current.condition.icon;
    condition.innerHTML = data.current.condition.text;
    
}
