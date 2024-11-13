// script.js
document.addEventListener("DOMContentLoaded", function () {
    const dehiwalaWeatherInfo = document.getElementById("dehiwala-weather-info");

    const updateWeatherInfo = (container, weatherData) => {
        if (!weatherData || weatherData.error) {
            container.innerHTML = "<p>Weather data unavailable</p>";
            return;
        }

        const { temp, humidity, description, updatedAt } = weatherData;
        const formattedUpdatedAt = new Date(updatedAt * 1000).toLocaleString(); // Convert UNIX timestamp

        container.innerHTML = `
            <div class="weather-details">
                <h2>${temp}°C</h2>
                <p>Humidity: ${humidity}%</p>
                <p>Condition: ${description}</p>
            </div>
            <p>Last updated: ${formattedUpdatedAt}</p>
        `;
    };

    updateWeatherInfo(dehiwalaWeatherInfo, dehiwalaWeatherData);
});
