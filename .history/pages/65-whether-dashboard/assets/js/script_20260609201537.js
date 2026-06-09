const apiKey = '9fac2c54a6a88a1f542c2e83df94d424';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('location-btn');
const closeBtn = document.getElementById('closeBtn');
const searchWeapon = document.getElementById('searchWeapon');
const currentWeatherDiv = document.getElementById('current-weather');
const forecastContainer = document.getElementById('forecast-container');
const forecastSection = document.getElementById('forecast-section');

// Search bar toggle function
function searchTagList(obj, ev) {
    var container = $(obj).closest('.search-weapon');
    if (!container.hasClass('active')) {
        container.addClass('active');
        if (ev) ev.preventDefault();
        setTimeout(() => {
            cityInput.focus();
        }, 100);
    }
    else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        cityInput.value = '';
    }
}

// Event listeners for search bar
searchBtn.addEventListener('click', (e) => {
    if (searchWeapon.classList.contains('active')) {
        const city = cityInput.value.trim();
        if (city) getWeatherData(city);
    } else {
        searchTagList(searchBtn, e);
    }
});

closeBtn.addEventListener('click', (e) => {
    searchTagList(closeBtn, e);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchWeapon.classList.contains('active')) {
        const city = cityInput.value.trim();
        if (city) getWeatherData(city);
    }
});

function showLoading() {
    currentWeatherDiv.innerHTML = `
        <div class="prestige-loader">
            <div class="prestige-spinner"></div>
            <p class="mt-3" style="color: #FFD700;">Summoning weather data...</p>
        </div>
    `;
}

async function getWeatherData(city) {
    showLoading();
    try {
        const [currentRes, forecastRes] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        ]);
        
        if (!currentRes.ok) throw new Error('Location not found in our celestial database');
        
        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();
        
        displayCurrentWeather(currentData);
        displayForecast(forecastData);
        forecastSection.style.display = 'block';
        
        setTimeout(() => {
            forecastSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
    } catch (error) {
        currentWeatherDiv.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-crown" style="font-size: 3rem; color: #FFD700; opacity: 0.5;"></i>
                <h4 class="mt-3" style="color: #FFD700;">${error.message}</h4>
                <p style="color: rgba(255,255,255,0.6);">Please try another prestigious location</p>
            </div>
        `;
        forecastSection.style.display = 'none';
    }
}

async function getWeatherByCoords(lat, lon) {
    showLoading();
    try {
        const [currentRes, forecastRes] = await Promise.all([
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`),
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
        ]);
        
        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();
        
        displayCurrentWeather(currentData);
        displayForecast(forecastData);
        forecastSection.style.display = 'block';
        cityInput.value = currentData.name;
        
        // Close search bar after location detection
        if (searchWeapon.classList.contains('active')) {
            searchWeapon.classList.remove('active');
        }
        
    } catch (error) {
        currentWeatherDiv.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-map-marker-alt" style="font-size: 3rem; color: #FFD700;"></i>
                <h4 class="mt-3" style="color: white;">Location Access Denied</h4>
                <p style="color: rgba(255,255,255,0.6);">Unable to detect your regal position</p>
            </div>
        `;
        forecastSection.style.display = 'none';
    }
}

function displayCurrentWeather(data) {
    const { name, main, weather, wind, dt, sys } = data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;
    const date = new Date(dt * 1000);
    
    currentWeatherDiv.innerHTML = `
        <div class="fade-up">
            <div class="row align-items-center">
                <div class="col-md-6 text-center text-md-start">
                    <div class="city-name">${name} <span style="font-size: 1.5rem;">${sys.country}</span></div>
                    <div class="text-white-50 mb-3">
                        <i class="far fa-calendar-alt me-2"></i>${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        <br>
                        <i class="far fa-clock me-2"></i>${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div class="weather-condition">
                        <i class="fas fa-cloud-moon"></i> ${weather[0].description.toUpperCase()}
                    </div>
                </div>
                <div class="col-md-6 text-center">
                    <img src="${iconUrl}" alt="${weather[0].description}" class="weather-icon-master">
                    <div class="temp-master">${Math.round(main.temp)}°C</div>
                    <div class="text-white-50">Feels like ${Math.round(main.feels_like)}°C</div>
                </div>
            </div>
            <div class="row mt-4 g-3">
                <div class="col-md-3 col-6">
                    <div class="detail-card">
                        <i class="fas fa-tint" style="color: #4ECDC4; font-size: 1.5rem;"></i>
                        <div class="text-white-50 small mt-2">Humidity</div>
                        <div class="text-white fw-bold">${main.humidity}%</div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="detail-card">
                        <i class="fas fa-wind" style="color: #4ECDC4; font-size: 1.5rem;"></i>
                        <div class="text-white-50 small mt-2">Wind Speed</div>
                        <div class="text-white fw-bold">${wind.speed} m/s</div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="detail-card">
                        <i class="fas fa-compress-alt" style="color: #4ECDC4; font-size: 1.5rem;"></i>
                        <div class="text-white-50 small mt-2">Pressure</div>
                        <div class="text-white fw-bold">${main.pressure} hPa</div>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="detail-card">
                        <i class="fas fa-eye" style="color: #4ECDC4; font-size: 1.5rem;"></i>
                        <div class="text-white-50 small mt-2">Visibility</div>
                        <div class="text-white fw-bold">${(data.visibility / 1000).toFixed(1)} km</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter(item => 
        item.dt_txt.includes('12:00:00')
    ).slice(0, 5);
    
    forecastContainer.innerHTML = '';
    
    dailyForecasts.forEach((day, index) => {
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
        const date = new Date(day.dt * 1000);
        
        const col = document.createElement('div');
        col.className = 'col-md-2 col-sm-4 mb-3 forecast-col fade-up';
        col.style.animationDelay = `${index * 0.1}s`;
        col.innerHTML = `
            <div class="forecast-luxury-card fade-up">
                <div class="forecast-day">${date.toLocaleDateString('en-US', { weekday: 'long' })}</div>
                <div class="small text-white-50">${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                <img src="${iconUrl}" alt="${day.weather[0].description}" class="forecast-icon">
                <div class="forecast-temp">${Math.round(day.main.temp)}°C</div>
                <div class="small text-white-50">${day.weather[0].main}</div>
                <div class="small text-white-50 mt-2">
                    <i class="fas fa-tint"></i> ${day.main.humidity}%
                </div>
            </div>
        `;
        forecastContainer.appendChild(col);
    });
}

locationBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => getWeatherByCoords(pos.coords.latitude, pos.coords.longitude),
            () => alert('Please grant location access for the premium experience')
        );
    } else {
        alert('Geolocation not supported in this browser');
    }
});

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => getWeatherByCoords(pos.coords.latitude, pos.coords.longitude),
            () => getWeatherData('Paris')
        );
    } else {
        getWeatherData('Paris');
    }
});