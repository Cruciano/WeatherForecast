import React from 'react';
import styles from './forecast.module.css';
import WindDirection from "../WindDirection/windDirection";

const SelectedDay = ({dayForecast}) => {
    return (
        <div className={styles.selectedDay}>
            <div className={styles.mainInfo}>
                <p className={styles.weekday}>{dayForecast.weekday}, {dayForecast.date.getDate()}</p>
                <p className={styles.temperature}>{dayForecast.maxTemp <= 0 || "+"}{dayForecast.maxTemp}</p>
                <div className={styles.imgWrapper}>
                    <img src={`https://www.metaweather.com/static/img/weather/${dayForecast.weatherStateAbbr}.svg`}/>
                </div>
                <p>Accuracy: {dayForecast.accuracy}%</p>
            </div>
            <div className={styles.info}>
                <table>
                <tr>
                    <td>Min temperature:</td>
                    <td className={styles.descText}>{dayForecast.minTemp <= 0 || "+"}{dayForecast.minTemp}</td>
                </tr>
                <tr>
                    <td>Humidity:</td>
                    <td className={styles.descText}>{dayForecast.humidity}%</td>
                </tr>
                <tr>
                    <td>Visibility:</td>
                    <td className={styles.descText}>{dayForecast.visibility} km</td>
                </tr>
                <tr>
                    <td>Wind speed:</td>
                    <td className={styles.descText}>{dayForecast.windSpeed} km/h</td>
                </tr>
                </table>
                <div className={styles.right}>
                    <WindDirection angle={dayForecast.windDirection}/>
                </div>
            </div>
        </div>
    );
};

export default SelectedDay;