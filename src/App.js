import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getCity, getError, getIsLoading, getWeekForecast} from "./Application/selectors/weather";
import CityForm from "./View/CityForm/cityForm";
import Loading from "./View/loading";
import Error from "./View/error";
import {useEffect, useState} from "react";
import Forecast from "./View/forecast";

function App() {
    /*const dispatch = useDispatch();
    const location = useSelector(getCity);*/

    const forecast = useSelector(getWeekForecast);
    const [showForecast, setShowForecast] = useState(false);

    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        if (forecast.length !== 0) {
            setShowForecast(true);
        }
    }, [forecast])

    return (
        <div className="App">
            {!showForecast && (
                <div>
                    {isLoading || <CityForm/>}
                    {!isLoading || <Loading/>}
                    {(isLoading || error.length === 0) || <Error message={error}/>}
                </div>
            )}
            {showForecast && <Forecast forecast={forecast} close={() => setShowForecast(false)}/>}
        </div>
    );
}

export default App;
