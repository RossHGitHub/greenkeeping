import { getData, storeData } from "./weatherAPICalls.js";
import { displayFutureDay } from "../dateAndTime.js";

let days = displayFutureDay();

async function processMainData(){
let data = await getData();
let storedData = await storeData(data)
await mainWeatherUpdateLoop(storedData);
}

export async function mainWeatherUpdateLoop(data){
    let mainCont = document.getElementById('weatherWrapper');
    
    for (let i=0; i<7; i++){
        let j = 24 * i;
        let k = 6;
        let day = displayFutureDay(j);

        let wrap = document.createElement('div');
        wrap.classList = 'mainWeatherWrap';

        let dayWrap = document.createElement('div');
        dayWrap.classList='weatherDate';
        dayWrap.innerHTML = day.formattedDate;

        let temp = document.createElement('div')
        temp.classList='weatherItem'
        let dayTemp = ((data.highTemp[i] + data.lowTemp[i]) / 2);
        let dayTempFormatted = Math.round(dayTemp * 10) / 10;
        temp.innerHTML = `Temperature: ${dayTempFormatted}°C`;

        let highLowTemp = document.createElement('div');
        highLowTemp.classList='weatherItem'
        highLowTemp.innerHTML = `High: ${data.highTemp[i]}°C / Low: ${data.lowTemp[i]}°C`;

        let wind = document.createElement('div');
        wind.classList='weatherItem'
        wind.innerHTML = `Wind: ${data.windSpeed[i]}MpH`

        let relHumidity = document.createElement('div');
        relHumidity.classList='weatherItem';
        relHumidity.innerHTML = `${data.relHumidity[j]}% RH`;

        let dewPoint = document.createElement('div');
        dewPoint.classList='weatherItem'
        dewPoint.innerHTML = `${data.dewPoint[j]}°C Dew Point`;

        let precipChance = document.createElement('div');
        precipChance.classList='weatherItem'
        precipChance.innerHTML = `Chance of Precip: ${data.precipProb[j]}%`;

        let airPressure = document.createElement('div');
        airPressure.classList='weatherItem'
        airPressure.innerHTML = `Air Pressure: ${data.airPressure[j]} hPa`;

        let refETR = document.createElement('div');
        refETR.classList='weatherItem'
        refETR.innerHTML = `Reference (ET₀): ${data.refETR[i]}`

        wrap.appendChild(dayWrap);
        wrap.appendChild(temp);
        wrap.appendChild(highLowTemp);
        wrap.appendChild(wind);
        wrap.appendChild(relHumidity);
        wrap.appendChild(dewPoint);
        wrap.appendChild(precipChance);
        wrap.appendChild(airPressure);
        wrap.appendChild(refETR);


        mainCont.appendChild(wrap);

      


    }
}

processMainData();