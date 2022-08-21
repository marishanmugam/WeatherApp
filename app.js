// decalring variables
let lat;
let long;
let temprature = document.querySelector('.temp');
let icon = document.querySelector('.icon');
let summart = document.querySelector('.summary');
let loc = document.querySelector('.location');

const kelvin = 273;

window.addEventListener('load', ()=> {

    
       navigator.geolocation.getCurrentPosition((pos) => {
        lat = pos.coords.latitude;
        long = pos.coords.longitude;
        
        //api id
        const apikey = '6a8cc3ef3318072fd55cc831dcbc0624';
        const id = '524901';
        //api url
        const getData = `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6a8cc3ef3318072fd55cc831dcbc0624&lat=${lat}&lon=${long}`

        fetch(getData)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            temprature.innerHTML = `Temp: `+Math.floor(data.list[0].main.temp - kelvin) + ' \u00B0 C';
            summart.innerHTML = `Weather: `+data.list[0].weather[0].description;
            loc.innerHTML = `Location : `+data.city.name + " , " +  data.city.country;
            let icon1 =  data.list[0].weather[0].icon
            let iconUrl = "http://openweathermap.org/img/wn/"+icon1+".png"
            icon.innerHTML = `<img src="${iconUrl}" style="height:8rem"></img>`
        })
       })
    })