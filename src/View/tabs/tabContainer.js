import React from 'react';
import Tab from './tab';
import styles from './tab.module.css';

const TabContainer = ({forecast, selectedDay, setSelectedDay}) => {
    return (
        <div className={styles.container}>
            {forecast?.map(item =>
                <Tab
                    key={item.date.day}
                    day={item.date.day}
                    maxTemp={item.maxTemp}
                    weatherStateAbbr={item.weatherStateAbbr}
                    selected={item.date.day === selectedDay}
                    onClick={() => setSelectedDay(item.date.day)}
                />)}
        </div>
    );
};

export default TabContainer;
