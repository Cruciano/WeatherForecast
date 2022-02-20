export const mapDayForecastToDto = (dayForecast) => ({
    applicable_date: dayForecast.applicable_date,
    humidity: dayForecast.humidity,
    max_temp: dayForecast.max_temp,
    min_temp: dayForecast.min_temp,
    accuracy: dayForecast.predictability,
    visibility: dayForecast.visibility,
    weather_state_abbr: dayForecast.weather_state_abbr,
    wind_direction: dayForecast.wind_direction,
    wind_direction_compass: dayForecast.wind_direction_compass,
    wind_speed: dayForecast.wind_speed.toFixed(1),
})
