const API_KEY = 'G8KJyLByWoBhHwtTA31DXAdr63B1bosc';
const IP_ADDRESS = '27.73.88.180';

const getLocationKey = async function(ip_address){
    const url = `http://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${API_KEY}&q=${ip_address}`
    const response = await fetch(url);
    return response.json();
}

const getDailyForecasts = async function(location_key){
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${location_key}?apikey=${API_KEY}&details=true`;
    const response = await fetch(url);
    return response.json();
}

const getFiveDailyForecasts = async function(location_key){
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${location_key}?apikey=${API_KEY}`
    const response = await fetch(url)
    return response.json();
}

const calculateTemperature = (data) => {
    
}

function app() {
        getLocationKey(IP_ADDRESS).then(location=>{
            const cityData = location.ParentCity.EnglishName;
            const countryData = location.Country.EnglishName;
            const locationKey = location.Key;
            forecastList.innerHTML = '';
            getFiveDailyForecasts(locationKey).then(item=>{
                for(let i=1;i<item.DailyForecasts.length-1;i++) {
                    const divElement = document.createElement('div');
                    divElement.classList.add('header-forecast-item');
                    divElement.innerHTML = `
                    <div class="forecast-item__img">
                    <img src="./images/wind.png" alt="">
                    </div>
                    <div class="forecast-item__text">
                    <p>Fri</p>
                    <p>Windy</p>
                    </div>
                    <div class="forecast-item__temp">
                    30 | 32 C
                    </div>
                    `
                    forecastList.appendChild(divElement);
                    // const minTemp = item.DailyForecasts[i].Temperature.Minimum.Value;
                    // const maxTemp = item.DailyForecasts[i].Temperature.Maximum.Value;
                    // const avgTemp = Math.floor(((minTemp + maxTemp)/2 - 32) / 1.8);
                    // let imageDaySrc = '';
                    // if(item.DailyForecasts[i].Day.Icon<10) 
                    //     imageDaySrc = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${item.DailyForecasts[i].Day.Icon}-s.png`;
                    // else  
                    //     imageDaySrc = `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${item.DailyForecasts[i].Day.Icon}-s.png`; 
                    //     weatherListHtml = document.querySelector('.weather-footer__list')
                    // const li = document.createElement('li');
                    // li.classList.add('weather-footer__item');
                    // li.innerHTML = 
                    // `<span class="weather-item__date">
                    //      ${new Date(item.DailyForecasts[i].Date).toUTCString().slice(0, 12)}
                    //     </span>
                    //     <div class="weather-item__icon">
                    //         <img src=
                    //         ${imageDaySrc} alt="" >
                    //     </div>
                    //     <p class="weather-item__temp">
                    //     ${avgTemp} °
                    //     </p>`
                    // weatherListHtml.appendChild(li);
                }
            })
        })
}

app();