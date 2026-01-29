const temperature = document.getElementById('temperature')
const wind = document.getElementById('wind')
const windChill = document.getElementById('windChill')

const t = 27
const w = 22

let wC = "N/A"

if (t <= 10 && w > 4.8) {
    wC = calculateWindChill(t, w).toFixed(2) + " °C"
}

temperature.textContent = t + " °C"
wind.textContent = w + " km/h"
windChill.textContent = wC

const calculateWindChill = (temperature, windSpeed) => 13.12 + 0.6215 * temperature - 11.37 * windSpeed ** 0.16 + 0.3965 * temperature * windSpeed ** 0.16