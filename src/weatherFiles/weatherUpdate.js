import { getData, storeData } from "./weatherAPICalls.js";

let currentWeatherDateDiv = document.getElementById('currentWeatherDate');
let currentWeatherTempDiv = document.getElementById('currentWeatherTemp');
let currentWeatherPrecipDiv = document.getElementById('currentWeatherPrecip');
let currentWeatherDewPointDiv = document.getElementById('currentWeatherDewPoint');
let currentWeatherSoilTempDiv = document.getElementById('currentWeatherSoilTemp');
let currentWeatherSoilMoistureDiv = document.getElementById('currentWeatherSoilMoisture');
let currentWeatherETRDiv = document.getElementById('currentWeatherETR');


let weatherPlusOneTempDiv = document.getElementById('weatherPlusOneTemp');
let weatherPlusOneDateDiv = document.getElementById('weatherPlusOneDate');
let weatherPlusOneETDiv = document.getElementById('weatherPlusOneET');

let weatherPlusTwoTempDiv = document.getElementById('weatherPlusTwoTemp');
let weatherPlusTwoDateDiv = document.getElementById('weatherPlusTwoDate');
let weatherPlusTwoETDiv = document.getElementById('weatherPlusTwoET');


async function weatherDOMUpdate(data){
    console.log(data);
    currentWeatherDateDiv.innerHTML = data.currentDate;
    currentWeatherTempDiv.innerHTML = `${data.currentWeatherMax}°C`;
    currentWeatherPrecipDiv.innerHTML = `Precipitation: ${data.currentWeatherPrecip}mm`;
    currentWeatherDewPointDiv.innerHTML = `Dew Point: ${data.currentWeatherDewPoint} °C`;
    currentWeatherSoilTempDiv.innerHTML = `Soil Temp 3-9cm: ${data.currentWeatherSoilTemp}m³/m³`
    currentWeatherSoilMoistureDiv.innerHTML = `Soil Moisture: ${data.currentWeatherSoilMoisture}°C`;
    currentWeatherETRDiv.innerHTML = `Reference Evapotranspiration (ET₀): ${data.currentWeatherETR}mm`;
   

 
}

async function processData(){
    try{
let data = await getData();
let storedData = await storeData(data);
await weatherDOMUpdate(storedData)
    }
    catch {
    }
}

processData();

