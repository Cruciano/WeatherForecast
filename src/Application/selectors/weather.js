export const getCity = state => state.weather.location.title;

export const getWoeid = state => state.weather.location.woeid;

export const getWeekForecast = state => state.weather.forecast;

export const getDayForecast = day => state => {
    return state.weather.forecast.find(item => item.date.day === day);
}

export const getIsLoading = state => state.infoUi.isLoading;

export const getError = state => state.infoUi.error;