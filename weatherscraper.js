const axios = require('axios');

async function scrapeWeather(city) {
    try {
        const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric`;
        const response = await axios.get(weatherAPIUrl);

        const weatherData = {
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
        };

        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}

module.exports = scrapeWeather;
