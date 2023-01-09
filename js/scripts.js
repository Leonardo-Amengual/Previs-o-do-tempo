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

    console.log(data);
}


const showWeatherData = (city) => {
    getWeatherdata(city)
};

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})