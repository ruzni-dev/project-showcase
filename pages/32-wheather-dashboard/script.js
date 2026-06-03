// DOM Elements
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const cityName = document.getElementById('city-name');
const currentDate = document.getElementById('current-date');
const currentTemp = document.getElementById('current-temp');
const weatherDesc = document.getElementById('weather-desc');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const uvIndex = document.getElementById('uv-index');
const feelsLike = document.getElementById('feels-like');
const visibility = document.getElementById('visibility');
const cloudCover = document.getElementById('cloud-cover');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const lastUpdate = document.getElementById('last-update');
const forecastContainer = document.getElementById('forecast-container');
const celsiusBtn = document.getElementById('celsius-btn');
const fahrenheitBtn = document.getElementById('fahrenheit-btn');

// Set current date
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
currentDate.textContent = today.toLocaleDateString('en-US', options);

// Sample weather data (in a real app, this would come from an API)
const weatherData = {
    city: "New York",
    temperature: 24,
    description: "Sunny",
    wind: 12,
    humidity: 65,
    pressure: 1015,
    uv: 5.2,
    feelsLike: 26,
    visibility: 10,
    cloudCover: 20,
    sunrise: "5:42 AM",
    sunset: "8:15 PM",
    lastUpdate: "10:30 AM",
    forecast: [
        { day: "Sat", icon: "cloud-sun", max: 26, min: 18 },
        { day: "Sun", icon: "cloud-showers-heavy", max: 22, min: 16 },
        { day: "Mon", icon: "sun", max: 28, min: 20 },
        { day: "Tue", icon: "cloud-sun", max: 25, min: 17 },
        { day: "Wed", icon: "bolt", max: 23, min: 15 }
    ]
};

// Function to update weather display
function updateWeatherDisplay(data) {
    cityName.textContent = data.city;
    currentTemp.textContent = `${data.temperature}°`;
    weatherDesc.textContent = data.description;
    windSpeed.textContent = `${data.wind} km/h`;
    humidity.textContent = `${data.humidity}%`;
    pressure.textContent = `${data.pressure} hPa`;
    uvIndex.textContent = data.uv;
    feelsLike.textContent = `${data.feelsLike}°`;
    visibility.textContent = `${data.visibility} km`;
    cloudCover.textContent = `${data.cloudCover}%`;
    sunrise.textContent = data.sunrise;
    sunset.textContent = data.sunset;
    lastUpdate.textContent = data.lastUpdate;

    // Update forecast
    forecastContainer.innerHTML = '';
    data.forecast.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        forecastCard.innerHTML = `
            <div class="forecast-day">${day.day}</div>
            <div class="forecast-icon">
                <i class="fas fa-${day.icon}"></i>
            </div>
            <div class="forecast-temp">
                <span class="max-temp">${day.max}°</span> /
                <span class="min-temp">${day.min}°</span>
            </div>
        `;
        forecastContainer.appendChild(forecastCard);
    });
}

// Initialize with sample data
updateWeatherDisplay(weatherData);

// Search functionality
searchBtn.addEventListener('click', () => {
    const city = searchInput.value.trim();
    if (city) {
        // In a real app, you would fetch data from API here
        const newData = {...weatherData, city};
        updateWeatherDisplay(newData);
        searchInput.value = '';
    }
});

// Enter key for search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Unit toggle functionality
celsiusBtn.addEventListener('click', () => {
    celsiusBtn.classList.add('active');
    fahrenheitBtn.classList.remove('active');
    // Convert temperatures to Celsius
    const newData = {
        ...weatherData,
        temperature: 24,
        feelsLike: 26,
        forecast: weatherData.forecast.map(day => ({
            ...day,
            max: day.max,
            min: day.min
        }))
    };
    updateWeatherDisplay(newData);
});

fahrenheitBtn.addEventListener('click', () => {
    fahrenheitBtn.classList.add('active');
    celsiusBtn.classList.remove('active');
    // Convert temperatures to Fahrenheit
    const newData = {
        ...weatherData,
        temperature: Math.round(24 * 9/5 + 32),
        feelsLike: Math.round(26 * 9/5 + 32),
        forecast: weatherData.forecast.map(day => ({
            ...day,
            max: Math.round(day.max * 9/5 + 32),
            min: Math.round(day.min * 9/5 + 32)
        }))
    };
    updateWeatherDisplay(newData);
});

// Initialize with random cities for demo
const demoCities = ['London', 'Paris', 'Tokyo', 'Sydney', 'Dubai'];
let currentIndex = 0;

// Change city every 10 seconds for demo purposes
setInterval(() => {
    currentIndex = (currentIndex + 1) % demoCities.length;
    const newData = {...weatherData, city: demoCities[currentIndex]};
    updateWeatherDisplay(newData);
}, 10000);