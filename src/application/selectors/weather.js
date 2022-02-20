export const getTitle = state => state.weather.location.title;

export const getWoeid = state => state.weather.location.woeid;

export const getForecast = date => state => {
    return state.weather.forecast.find(day => day.applicable_date === date);
}