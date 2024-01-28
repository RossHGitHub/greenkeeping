import { getData, storeData } from "./weatherAPICalls.js";
import { displayFutureDays } from "../dateAndTime.js";

const currentTemp = document.getElementById('currentWeatherTemp');
const currentHighLow = document.getElementById('currentHighLowTemp');
const currentWind = document.getElementById('currentWeatherWind');
const currentPrecipitation = document.getElementById('currentWeatherPrecip');
const currentRelHumidity = document.getElementById('currentRelHumidity');
const currentDewPoint = document.getElementById('currentWeatherDewPoint');
const currentPrecipChance = document.getElementById('currentWeatherPrecipChance');
const currentAirPressure = document.getElementById('currentWeatherAirPressure');
const currentRefETR = document.getElementById('currentWeatherRefETR');

const weatherPlusOneTemp = document.getElementById('weatherPlusOneTemp');
const weatherPlusOneHighLow = document.getElementById('weatherPlusOneHighLowTemp');
const weatherPlusOneWind = document.getElementById('weatherPlusOneWind');
const weatherPlusOnePrecipitation = document.getElementById('weatherPlusOnePrecip');
const weatherPlusOneRelHumidity = document.getElementById('weatherPlusOneRelHumidity');
const weatherPlusOneDewPoint = document.getElementById('weatherPlusOneDewPoint');
const weatherPlusOnePrecipChance = document.getElementById('weatherPlusOnePrecipChance');
const weatherPlusOneAirPressure = document.getElementById('weatherPlusOneAirPressure');
const weatherPlusOneRefETR = document.getElementById('weatherPlusOneRefETR');

const weatherPlusTwoTemp = document.getElementById('weatherPlusTwoTemp');
const weatherPlusTwoHighLow = document.getElementById('weatherPlusTwoHighLowTemp');
const weatherPlusTwoWind = document.getElementById('weatherPlusTwoWind');
const weatherPlusTwoPrecipitation = document.getElementById('weatherPlusTwoPrecip');
const weatherPlusTwoRelHumidity = document.getElementById('weatherPlusTwoRelHumidity');
const weatherPlusTwoDewPoint = document.getElementById('weatherPlusTwoDewPoint');
const weatherPlusTwoPrecipChance = document.getElementById('weatherPlusTwoPrecipChance');
const weatherPlusTwoAirPressure = document.getElementById('weatherPlusTwoAirPressure');
const weatherPlusTwoRefETR = document.getElementById('weatherPlusTwoRefETR');

let currentTimeDiv = document.getElementById('currentTime')
let weatherPlusOneTime = document.getElementById('weatherPlusOneTime');
let weatherPlusTwoTime = document.getElementById('weatherPlusTwoTime');




async function weatherDOMUpdate(data){

    currentTemp.innerHTML = `${data.currentTemp}°C`;
    currentHighLow.innerHTML = `High: ${data.highTemp[0]}°C /  Low: ${data.lowTemp[0]}°C`;
    currentWind.innerHTML = `Wind: ${data.windSpeed[0]} mp/h`;
    currentPrecipitation.innerHTML = `${data.currentPrecip}mm`;
    currentRelHumidity.innerHTML = `${data.relHumidity[0]}% RH`;
    currentDewPoint.innerHTML = `${data.dewPoint[0]}°C Dew Point`
    currentPrecipChance.innerHTML = `${data.precipProb[0]}%`;
    currentAirPressure.innerHTML = `Air Pressure: ${data.airPressure[0]} hPa`
    currentRefETR.innerHTML = `Reference (ET₀): ${data.refETR[0]}mm`;

    let estWeatherOne = ((data.highTemp[1] + data.lowTemp[1])/2)
    weatherPlusOneTemp.innerHTML = `${estWeatherOne}°C`;
    weatherPlusOneHighLow.innerHTML = `High: ${data.highTemp[1]}°C /  Low: ${data.lowTemp[1]}°C`;
    weatherPlusOneWind.innerHTML = `Wind: ${data.windSpeed[1]} mp/h`;
    weatherPlusOnePrecipitation.innerHTML = `N/A`;
    weatherPlusOneRelHumidity.innerHTML = `${data.relHumidity[23]}% RH`;
    weatherPlusOneDewPoint.innerHTML = `${data.dewPoint[23]}°C Dew Point`;
    weatherPlusOnePrecipChance.innerHTML = `${data.precipProb[23]}%`;
    weatherPlusOneAirPressure.innerHTML = `Air Pressure: ${data.airPressure[23]} hPa`
    weatherPlusOneRefETR.innerHTML = `Reference (ET₀): ${data.refETR[1]}mm`;

    let estWeatherTwo = ((data.highTemp[2]+ data.lowTemp[2])/2)
    weatherPlusTwoTemp.innerHTML = `${estWeatherTwo}°C`;
    weatherPlusTwoHighLow.innerHTML = `High: ${data.highTemp[2]}°C /  Low: ${data.lowTemp[2]}°C`;
    weatherPlusTwoWind.innerHTML = `Wind: ${data.windSpeed[2]} mp/h`;
    weatherPlusTwoPrecipitation.innerHTML = `N/A`;
    weatherPlusTwoRelHumidity.innerHTML = `${data.relHumidity[47]}% RH`;
    weatherPlusTwoDewPoint.innerHTML = `${data.dewPoint[47]}°C Dew Point`;
    weatherPlusTwoPrecipChance.innerHTML = `${data.precipProb[47]}%`;
    weatherPlusTwoAirPressure.innerHTML = `Air Pressure: ${data.airPressure[47]} hPa`
    weatherPlusTwoRefETR.innerHTML = `Reference (ET₀): ${data.refETR[2]}mm`;
    
}



function weatherDaysUpdate(){
    let days = displayFutureDays();
    let tomorrow = days.day24HoursFromNow;
    let twoDaysTime = days.day48HoursFromNow;

    weatherPlusOneTime.innerHTML = tomorrow;
    weatherPlusTwoTime.innerHTML = twoDaysTime;

}

async function processData(){
    try{
let data = await getData();
let storedData = await storeData(data);
await weatherDaysUpdate();
await weatherDOMUpdate(storedData)
    }
    catch {
    }
}

processData();

