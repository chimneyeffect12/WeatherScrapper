document.getElementById('weatherForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const city = document.getElementById('cityInput').value;
    const url = `/weather/${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const weatherData = await response.json();
        displayWeather(weatherData, city);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        displayError('Weather data not found');
    }
});

function displayWeather(weatherData, city) {
    const displayElement = document.getElementById('weatherDisplay');
    displayElement.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p><strong>Temperature:</strong> ${weatherData.temperature}°C</p>
        <p><strong>Description:</strong> ${weatherData.description}</p>
        <p><strong>Humidity:</strong> ${weatherData.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${weatherData.windSpeed} m/s</p>
    `;
}

function displayError(message) {
    const displayElement = document.getElementById('weatherDisplay');
    displayElement.innerHTML = `<p>${message}</p>`;
}
