import {getForecast, getLocation} from "../../Api/weatherApi";
import {setForecast, setLocation} from "../actions/weather";
import {mapDayForecastToDto} from "../mappers/dayForecastToDto";
import {setError, setIsLoading} from "../actions/infoUi";

export const loadForecast = (location) => dispatch => {
    dispatch(setIsLoading(true));

    getLocation(location).then(data => {
        if(!data || data.length === 0){
            dispatch(setError("Wrong city name"));
            dispatch(setIsLoading(false));
            return;
        }

        dispatch(setLocation(data.title, data.woeid));

        getForecast(data.woeid).then(forecast => {
            if(!forecast || forecast.length === 0){
                dispatch(setError("Something went wrong"));
                dispatch(setIsLoading(false));
                return;
            }

            dispatch(setForecast(forecast.map(item => mapDayForecastToDto(item))));
            dispatch(setError(""));
            dispatch(setIsLoading(false));
        });
    });


}