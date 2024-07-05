const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const scrapeWeather = require('./scraper/weatherscraper');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const weatherData = await scrapeWeather(city);

    if (weatherData) {
        res.json(weatherData);
    } else {
        res.status(404).json({ error: 'Weather data not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
