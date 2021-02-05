const apikey = "e903a103c100851c8d5a3008666283ca";
const apiBase = "https://api.openweathermap.org/data/2.5/weather";

const searchBtn = document.getElementById("searchBtn");
const inputValue = document.getElementById("city");
let showCity = document.getElementById("show_city");
const showTemp = document.getElementById("show_temperature");
const weatherSts = document.getElementById("weather_status");

const url = `${apiBase}?q=${inputValue}&units=metric&appid=${apikey}`

searchBtn.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=e903a103c100851c8d5a3008666283ca')
        .then(response => response.json())
        .then(data => setTemp(data))
        .catch(error => console.log(error))
})

function setTemp(data) {
    showCity.innerText = data.name || "Uknown Location";
    showTemp.innerText = data.main.temp;
    weatherSts.innerText = data.weather[0].main;
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    document.getElementById("city").value = "";
}
