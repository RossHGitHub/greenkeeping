import { getData, storeData } from "./weatherAPICalls.js";

const currentTemp = document.getElementById('currentWeatherTemp');
const currentHighLow = document.getElementById('currentHighLowTemp');
const currentWind = document.getElementById('currentWeatherWind');
const currentPrecipitation = document.getElementById('currentWeatherPrecip');
const currentRelHumidity = document.getElementById('currentRelHumidity');
const currentDewPoint = document.getElementById('currentWeatherDewPoint');
const currentPrecipChance = document.getElementById('currentWeatherPrecipChance');
const currentAirPressure = document.getElementById('currentWeatherAirPressure');
const currentRefETR = document.getElementById('currentWeatherRefETR');
let currentTimeDiv = document.getElementById('currentTime')




async function weatherDOMUpdate(data){

    currentTemp.innerHTML = `${data.currentTemp}°C`;
    currentHighLow.innerHTML = `High: ${data.highTemp[0]}°C /  Low: ${data.lowTemp[0]}°C`;
    currentWind.innerHTML = `Wind: ${data.windSpeed[0]}km/h`;
    currentPrecipitation.innerHTML = `${data.currentPrecip}mm`;
    currentRelHumidity.innerHTML = `${data.relHumidity[0]}% RH`;
    currentDewPoint.innerHTML = `${data.dewPoint[0]}°C Dew Point`
    currentPrecipChance.innerHTML = `${data.precipProb[0]}%`;
    currentAirPressure.innerHTML = `Air Pressure: ${data.airPressure[0]} hPa`
    currentRefETR.innerHTML = `Ref ETR (ET₀): ${data.refETR[0]}mm`;

    
    let currentTimeStamp = new Date();
    let currentHour = currentTimeStamp.getHours();
    let currentMinute = currentTimeStamp.getMinutes();
    let formattedTime = `${currentHour}:${currentMinute.toString().padStart(2, '0')}`;

    currentTimeDiv.innerHTML= `As of: ${formattedTime}`;

   

 
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

