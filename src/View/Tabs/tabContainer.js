import React from 'react';
import Tab from './tab';
import styles from './tab.module.css';

const TabContainer = ({forecast, selectedDay, setSelectedDay}) => {
    return (
        <div className={styles.container}>
            {forecast?.map(item =>
                <Tab
                    key={item.date.getDate()}
                    weekday={item.weekday}
                    date={item.date.getDate()}
                    maxTemp={item.maxTemp}
                    weatherStateAbbr={item.weatherStateAbbr}
                    selected={item.date.getDate() === selectedDay}
                    onClick={() => setSelectedDay(item.date.getDate())}
                />)}
        </div>
    );
};

export default TabContainer;
