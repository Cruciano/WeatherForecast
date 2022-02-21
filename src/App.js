import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getCity, getError, getIsLoading, getWeekForecast} from "./Application/selectors/weather";
import CityForm from "./View/CityForm/cityForm";
import Loading from "./View/loading";
import Error from "./View/error";
import {useEffect, useState} from "react";
import Forecast from "./View/Forecast/forecast";

function App() {
    const city = useSelector(getCity);
    const forecast = useSelector(getWeekForecast);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const [showForecast, setShowForecast] = useState(false);

    useEffect(() => {
        if (forecast.length !== 0) {
            setShowForecast(true);
        }
    }, [forecast])

    return (
        <div className="App">
            {!showForecast && (
                <div className="wrapper">
                    <h2>Weather forecast</h2>
                    {isLoading || <CityForm/>}
                    {!isLoading || <Loading/>}
                    {(isLoading || error.length === 0) || <Error message={error}/>}
                </div>
            )}
            {showForecast && <Forecast city={city} forecast={forecast} close={() => setShowForecast(false)}/>}
        </div>
    );
}

export default App;
