const KM_IN_MILE = 1.609344;

export const mapDayForecastToDto = (dayForecast) => {
    const date = dateStringToObj(dayForecast.applicable_date);

    return ({
        date,
        weekday: getWeekDay(date),
        humidity: dayForecast.humidity,
        maxTemp: dayForecast.max_temp.toFixed(),
        minTemp: dayForecast.min_temp.toFixed(),
        accuracy: dayForecast.predictability,
        visibility: (dayForecast.visibility * KM_IN_MILE).toFixed(),
        weatherStateAbbr: dayForecast.weather_state_abbr,
        windDirection: dayForecast.wind_direction,
        windDirectionCompass: dayForecast.wind_direction_compass,
        windSpeed: (dayForecast.wind_speed * KM_IN_MILE).toFixed(1),
    })
}

const dateStringToObj = date => {
    let dateComponents = date.split('-');
    return new Date(dateComponents[0], dateComponents[1], dateComponents[2]);
}

const getWeekDay = date => {
    switch (date.getDay()) {
        case 0:
            return 'Su';
        case 1:
            return 'Mo';
        case 2:
            return 'Tu';
        case 3:
            return 'We';
        case 4:
            return 'Th';
        case 5:
            return 'Fr';
        case 6:
            return 'Sa';
        default:
            return 'Mo';
    }
}
