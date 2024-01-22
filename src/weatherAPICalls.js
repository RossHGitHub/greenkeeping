
let currentWeatherTempDiv = document.getElementById('currentWeatherTemp');
let currentWeatherDateDiv = document.getElementById('currentWeatherDate');
let currentWeatherETDiv = document.getElementById('currentWeatherET');

let weatherPlusOneTempDiv = document.getElementById('weatherPlusOneTemp');
let weatherPlusOneDateDiv = document.getElementById('weatherPlusOneDate');
let weatherPlusOneETDiv = document.getElementById('weatherPlusOneET');

let weatherPlusTwoTempDiv = document.getElementById('weatherPlusTwoTemp');
let weatherPlusTwoDateDiv = document.getElementById('weatherPlusTwoDate');
let weatherPlusTwoETDiv = document.getElementById('weatherPlusTwoET');



async function getData(){
    try{
        let basic = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=55&longitude=-1.6167&daily=weather_code,apparent_temperature_max,et0_fao_evapotranspiration&forecast_days=3`)
        let jBasic = await basic.json()
    
         return {jBasic};
    }
    catch {
    
    console.log('Error Getting Data from API')
    }
}

    async function storeData(weather){
        try{
           
        let currentWeatherMax = weather.jBasic.daily.apparent_temperature_max[0];
        let weatherPlusOneMax = weather.jBasic.daily.apparent_temperature_max[1];
        let weatherPlusTwoMax = weather.jBasic.daily.apparent_temperature_max[2];
        
        let currentDate = weather.jBasic.daily.time[0];
        let weatherPlusOneDate = weather.jBasic.daily.time[1];
        let weatherPlusTwoDate = weather.jBasic.daily.time[2];

    

        let currentET = weather.jBasic.daily.et0_fao_evapotranspiration[0];
        let weatherPlusOneET = weather.jBasic.daily.et0_fao_evapotranspiration[1];
        let weatherPlusTwoET = weather.jBasic.daily.et0_fao_evapotranspiration[2];
        
        return {currentWeatherMax,
                weatherPlusOneMax,
                weatherPlusTwoMax,
                currentDate, 
                weatherPlusOneDate,
                weatherPlusTwoDate, 
                currentET, 
                weatherPlusOneET, 
                weatherPlusTwoET}
        }
        catch {
            console.log('Error storing data // storeData() issue')
        }

    }

    async function weatherDOMUpdate(data){
        console.log(data);
        currentWeatherTempDiv.innerHTML = `${data.currentWeatherMax}C`;
        currentWeatherDateDiv.innerHTML = data.currentDate;
        currentWeatherETDiv.innerHTML = `Evapotranspiration: ${data.currentET}mm`;

        weatherPlusOneTempDiv.innerHTML = `${data.weatherPlusOneMax}C`;
        weatherPlusOneDateDiv.innerHTML = data.weatherPlusOneDate;
        weatherPlusOneETDiv.innerHTML = `Evapotranspiration: ${data.weatherPlusOneET}mm`;

        weatherPlusTwoTempDiv.innerHTML = `${data.weatherPlusTwoMax}C`;
        weatherPlusTwoDateDiv.innerHTML = data.weatherPlusTwoDate;
        weatherPlusTwoETDiv.innerHTML = `Evapotranspiration: ${data.weatherPlusTwoET}mm`

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