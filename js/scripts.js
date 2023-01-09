// Variáveis e seleção de elementos
const apikey = "339530abff228ed357e750ba4745cf44";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#cidade-input")
const searchBtn = document.querySelector("#search")

// Funções
const showWeatherData = (city) => {
    console.log(city)
};

// Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})