export {storeData, getData};



async function getData(){
    try{
        let basic = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=55&longitude=-1.6167&current=temperature_2m,precipitation&hourly=dew_point_2m,et0_fao_evapotranspiration,soil_temperature_0cm,soil_moisture_3_to_9cm,soil_moisture_9_to_27cm&daily=temperature_2m_max,temperature_2m_min,et0_fao_evapotranspiration&forecast_days=3`)
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
           
 
        let currentDate = weather.jBasic.daily.time[0]
        let currentWeatherMax = weather.jBasic.current.temperature_2m;
        let currentWeatherPrecip = weather.jBasic.current.precipitation
        let currentWeatherDewPoint = weather.jBasic.hourly.dew_point_2m[11]
        let currentWeatherSoilTemp = weather.jBasic.hourly.soil_temperature_0cm[11]
        let currentWeatherSoilMoisture = weather.jBasic.hourly.soil_moisture_3_to_9cm[11]
        let currentWeatherETR = weather.jBasic.hourly.et0_fao_evapotranspiration[11]

        
        return {currentDate, 
                currentWeatherMax,
                currentWeatherPrecip,
                currentWeatherDewPoint,
                currentWeatherSoilTemp,
                currentWeatherSoilMoisture,
                currentWeatherETR
                }
        }
        catch {
            console.log('Error storing data // storeData() issue')
        }

    }

   