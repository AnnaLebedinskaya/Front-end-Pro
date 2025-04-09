const apiKey = "a7b1fc1501046ac5115ff4c51311a711";
const city = "Odesa";
const units = "metric";

function formatTime(date) {
  return date.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function updateClock() {
  const now = new Date();
  const dateString = now.toLocaleDateString("uk-UA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("time").textContent = formatTime(now);
  document.getElementById("date").textContent =
    dateString.charAt(0).toUpperCase() + dateString.slice(1);
}

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=ua`
    );
    const data = await response.json();

    document.getElementById("weather-description").textContent =
      data.weather[0].description;
    document.getElementById(
      "icon"
    ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("temp").textContent = Math.round(data.main.temp);
    document.getElementById(
      "feels-like"
    ).textContent = `Відчувається як: ${Math.round(data.main.feels_like)}°C`;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("pressure").textContent = data.main.pressure;
    document.getElementById("wind").textContent = Math.round(
      data.wind.speed * 3.6
    );

    document.getElementById("updated").textContent =
      "Оновлено: " + formatTime(new Date());
  } catch (error) {
    document.getElementById("weather-description").textContent =
      "Помилка завантаження даних";
    console.error(error);
  }
}

setInterval(updateClock, 1000);
window.onload = () => {
  updateClock();
  getWeather();
};
