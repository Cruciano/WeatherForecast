import React, {useState} from 'react';
import styles from './forecast.module.css';
import SelectedDay from "./selectedDay";
import TabContainer from "../Tabs/tabContainer";

const Forecast = ({city, forecast, close}) => {
    const [selectedDay, setSelectedDay] = useState(forecast[0].date.getDate());

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainContent}>
            <div className={styles.header}>
                <div className={styles.title}>{city}</div>
                <div className={styles.back} onClick={close}>Back</div>
            </div>
            <SelectedDay dayForecast={forecast.find(item => item.date.getDate() === selectedDay)}/>
            </div>
            <TabContainer forecast={forecast} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
        </div>
    );
};

export default Forecast;
