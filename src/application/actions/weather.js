export const SET_LOCATION = '[set] location';
export const SET_FORECAST = '[set] forecast';

export const setLocation = (title, woeid) => ({
    type: SET_LOCATION,
    payload: {
        title,
        woeid,
    }
})

export const setForecast = forecast => ({
    type: SET_FORECAST,
    payload: forecast,
})