var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = 'af86380bfbbe879275cd50ba86cf137d';

function conversion(val) {
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var weatherDescription = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspd = data['wind']['speed'];
            
            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${conversion(temperature)} °C</span>`;
            descrip.innerHTML = `Sky Condition: <span>${weatherDescription}</span>`;
            wind.innerHTML = `Wind speed: <span>${windspd} m/s</span>`;
        })
        .catch(err => alert('Wrong city name'));
});
