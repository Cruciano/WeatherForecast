import React from 'react';

const SelectedDay = ({dayForecast}) => {
    return (
        <div>
            <p>humidity: {dayForecast.humidity}</p>
            <p>maxTemp: {dayForecast.maxTemp}</p>
            <p>minTemp: {dayForecast.minTemp}</p>
            <p>accuracy: {dayForecast.accuracy}</p>
            <p>visibility: {dayForecast.visibility}</p>
            <p>windDirection: {dayForecast.windDirection}</p>
            <p>windDirectionCompass: {dayForecast.windDirectionCompass}</p>
            <p>windSpeed: {dayForecast.windSpeed}</p>
        </div>
    );
};

export default SelectedDay;