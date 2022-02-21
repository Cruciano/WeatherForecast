const KM_IN_MILE = 1.609344;

const dateStringToObj = (date) => {
    let dateComponents = date.split('-');
    return {
        day: dateComponents[2],
        month: dateComponents[1],
        year: dateComponents[0],
    };
}

export const mapDayForecastToDto = (dayForecast) => ({
    date: dateStringToObj(dayForecast.applicable_date),
    humidity: dayForecast.humidity,
    maxTemp: dayForecast.max_temp.toFixed(),
    minTemp: dayForecast.min_temp.toFixed(),
    accuracy: dayForecast.predictability,
    visibility: (dayForecast.visibility * KM_IN_MILE).toFixed(),
    weatherStateAbbr: dayForecast.weather_state_abbr,
    windDirection: dayForecast.wind_direction,
    windDirectionCompass: dayForecast.wind_direction_compass,
    windSpeed: dayForecast.wind_speed.toFixed(1),
})
