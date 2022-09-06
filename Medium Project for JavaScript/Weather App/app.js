const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const menuEl = document.getElementById("menu-container");
const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors"});
    const respData = await resp.json();
        console.log(respData)
    addWeatherToPage(respData)
}

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp)

    const weather = document.createElement("div")
    weather.classList.add("weather")

    weather.innerHTML = `
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C</h2>
    <small>${data.weather[0].main}</small>
    `
    if(data.weather[0].main === "Rain"){
        menuEl.classList.add("image-snow")
    }
    if(data.weather[0].main === "Clear"){
        menuEl.classList.add("image-sun")
    }
    if(data.weather[0].main === "Snow"){
        menuEl.classList.add("image-snow")
    }
   
    main.innerHTML = "";
    
    main.appendChild(weather)
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = search.value
    if(location) {
        getWeatherByLocation(location)
    }
})