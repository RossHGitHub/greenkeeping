import {weatherDaysUpdate, weatherDOMUpdate} from "./weatherUpdate.js";
export {storeData, getData};



async function getData(){
    try{
        let basic = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=55&longitude=-1.6167&current=temperature_2m,precipitation&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation_probability,weather_code,pressure_msl&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,et0_fao_evapotranspiration&wind_speed_unit=mph&forecast_days=7`)
        let jBasic = await basic.json()
        console.log(jBasic);
         return {jBasic};
         
    }
    catch {
    
    console.log('Error Getting Data from API')
    }
}

    async function storeData(weather){
        try{
           
            let currentTemp = weather.jBasic.current.temperature_2m;
            let highTemp = weather.jBasic.daily.temperature_2m_max;
            let lowTemp = weather.jBasic.daily.temperature_2m_min;
            let windSpeed = weather.jBasic.daily.wind_speed_10m_max;
            let currentPrecip = weather.jBasic.current.precipitation;
            let relHumidity = weather.jBasic.hourly.relative_humidity_2m;
            let dewPoint = weather.jBasic.hourly.dew_point_2m;
            let precipProb = weather.jBasic.hourly.precipitation_probability;
            let airPressure = weather.jBasic.hourly.pressure_msl;
            let refETR = weather.jBasic.daily.et0_fao_evapotranspiration;
            let hourTemp = weather.jBasic.hourly.temperature_2m;
            let weatherCode = weather.jBasic.hourly.weather_code;
        


        
        return {
            currentTemp,
            highTemp,
            lowTemp,
            windSpeed,
            currentPrecip,
            relHumidity,
            dewPoint,
            precipProb,
            airPressure,
            refETR,
            hourTemp,
            weatherCode
    
                }
        }
        catch {
            console.log('Error storing data // storeData() issue')
        }

    }


    
    