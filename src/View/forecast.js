import React, {useState} from 'react';
import SelectedDay from "./selectedDay";
import TabContainer from "./tabs/tabContainer";

const Forecast = ({forecast, close}) => {
    const [selectedDay, setSelectedDay] = useState(forecast[0].date.day);
    
    return (
        <div>
            <SelectedDay dayForecast={forecast.find(item => item.date.day === selectedDay)} />
            <TabContainer forecast={forecast} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            <button onClick={close}>Back</button>
        </div>
    );
};

export default Forecast;
