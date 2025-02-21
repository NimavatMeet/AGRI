// JavaScript to fetch current weather using OpenWeatherMap API

window.onload = function() {
    // OpenWeatherMap API key (replace with your own API key)
    const apiKey = "bd5e378503939ddaee76f12ad7a97608"; // Insert your API key here
    const city = "Gandhinagar"; // You can change this to any city
  
    // API endpoint to fetch weather data
    const apiUrl = `http://openweathermap.org/appid#use`;
  
    // Fetching weather data
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Extract data from API response
        const cityName = data.name;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const weatherCondition = data.weather[0].description;
  
        // Update the HTML with the fetched data
        document.getElementById('city').innerText = cityName;
        document.getElementById('temp').innerText = `${temperature}°C`;
        document.getElementById('humidity').innerText = `${humidity}%`;
        document.getElementById('condition').innerText = weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-details').innerHTML = '<p>Unable to retrieve weather data. Please try again later.</p>';
      });
  };
  
