import { getData, storeData } from "./weatherAPICalls.js";

async function processMainData(){
let data = await getData();
let storedData = await storeData(data)
await mainWeatherUpdateLoop(storedData);
}

export async function mainWeatherUpdateLoop(data){
    let mainCont = document.getElementById('weatherWrapper');
    
    for (let i=0; i<7; i++){
        let j = 24 * i;

        let wrap = document.createElement('div');
        wrap.classList = 'mainWeatherWrap';

        let temp = document.createElement('div')
        temp.innerHTML = `${data.highTemp[i]}DegC`;

        let highLowTemp = document.createElement('div');
        highLowTemp.innerHTML = `High: ${data.highTemp[i]} / Low: ${data.lowTemp[i]}`;

        let wind = document.createElement('div');
        wind.innerHTML = `Wind: ${data.windSpeed[i]}MpH`

        let relHumidity = document.createElement('div');
        relHumidity.innerHTML = `${data.relHumidity[i+j]}% RH`;

        let dewPoint = document.createElement('div');
        relHumidity.innerHTML = `${data.dewPoint[i+j]} Dew Point`;

        let precipChance = document.createElement('div');
        precipChance.innerHTML = `Chance of Precip: ${data.precipProb[i]}%`;

        let airPressure = document.createElement('div');
        airPressure.innerHTML = `Air Pressure: ${data.airPressure[i+j]} hPa`;

        let refETR = document.createElement('div');
        refETR.innerHTML = `Reference (ET₀): ${data.refETR[i]}`

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