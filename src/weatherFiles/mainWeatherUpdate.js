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

        let weatherImgContainer = document.createElement('div');
        weatherImgContainer.classList='weatherImgContainer';
        let weatherImg = document.createElement('img');
        switch (data.weatherCode[j]) {
            
                case 0:
                    // Clear sky
                    weatherImg.src = '../img/sun.png';
                    break;
            
                case 1:
                case 2:
                case 3:
                    // Mainly clear, partly cloudy, and overcast
                    weatherImg.src = '../img/partly_cloudy.png';
                    break;
            
                case 45:
                case 48:
                    // Fog and depositing rime fog
                    weatherImg.src = '../img/fog.png';
                    break;
            
                case 51:
                case 53:
                case 55:
                case 56:
                case 57:
                    // Drizzle: Light, moderate, and dense intensity
                    // Freezing Drizzle: Light and dense intensity
                    weatherImg.src = '../img/drizzle.png'
                    break;
            
                case 61:
                case 63:
                case 65:
                    // Rain: Slight, moderate and heavy intensity
                    weatherImg.src = '../img/rain.png';
                    break;
            
                case 66:
                case 67:
                    // Freezing Rain: Light and heavy intensity
                    weatherImg.src = '../img/sleet.png';
                    break;
            
                case 71:
                case 73:
                case 75:
                    // Snow fall: Slight, moderate, and heavy intensity
                    weatherImg.src = '../img/snow.png';
                    break;
            
                case 77:
                    // Snow grains
                    weatherImg.src = '../img/snow.png';
                    break;
            
                case 80:
                case 81:
                case 82:
                    // Rain showers: Slight, moderate, and violent
                    weatherImg.src = '../img/heavy_rain.png';
                    break;
            
                case 85:
                case 86:
                    // Snow showers slight and heavy
                    weatherImg.src = '../img/snow.png';
                    break;
            
                case 95:
                    // Thunderstorm: Slight or moderate
                    weatherImg.src = '../img/storm.png';
                    break;
            
                case 96:
                case 99:
                    // Thunderstorm with slight and heavy hail
                    weatherImg.src = '../img/storm.png';
                    break;
            
                default:
                    // Default case if the codeNumber does not match any specified cases
                    weatherImg.src = '../img/cloud.png';
            }
            
        
    
        weatherImgContainer.appendChild(weatherImg);



        let temp = document.createElement('div')
        temp.classList='weatherItem'

        if ( i === 0){
            temp.innerHTML = `Temperature: ${data.currentTemp}°C`;
        } else {
        let dayTemp = ((data.highTemp[i] + data.lowTemp[i]) / 2);
        let dayTempFormatted = Math.round(dayTemp * 10) / 10;
        temp.innerHTML = `Temperature: ${dayTempFormatted}°C`;
        }

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
        refETR.innerHTML = `Reference (ET₀): ${data.refETR[i]}mm`

        wrap.appendChild(dayWrap);
        wrap.appendChild(weatherImgContainer)
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