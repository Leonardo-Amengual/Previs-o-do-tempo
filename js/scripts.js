// Variáveis e seleção de elementos
const apikey = "339530abff228ed357e750ba4745cf44";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#cidade-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#cidade");
const tempElement = document.querySelector("#temperatura span");
const descElement = document.querySelector("#descricao");
const weatherIconElement = document.querySelector("#icone-pais");
const countryElement = document.querySelector("#pais");
const umidityElement = document.querySelector("#humidade span");
const windElement = document.querySelector("#vento span");

// Funções
const getWeatherdata = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data
}


const showWeatherData = async (city) => {
    const data = await getWeatherdata(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    umidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;



};

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})