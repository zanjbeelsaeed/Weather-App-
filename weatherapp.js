document.getElementById('get-weather').addEventListener('click', function() {
  const city = document.getElementById('city-input').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://wttr.in/${city}?format=j1`)
    .then(response => response.json())
    .then(data => {
      const weather = data.current_condition[0];
      const location = data.nearest_area[0];

      const weatherInfo = `
        <h2>Weather in ${location.areaName[0].value}</h2>
        <p><strong>Temperature:</strong> ${weather.temp_C}°C (${weather.temp_F}°F)</p>
        <p><strong>Condition:</strong> ${weather.weatherDesc[0].value}</p>
        <p><strong>Humidity:</strong> ${weather.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${weather.windspeedKmph} km/h</p>
      `;

      document.getElementById('weather-info').innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data. Please try again.</p>';
      console.error('Error:', error);
    });
});