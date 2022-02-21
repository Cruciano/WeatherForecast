import React from 'react';
import cn from "classnames";
import styles from './tab.module.css';

const Tab = ({weekday, date, maxTemp, weatherStateAbbr, selected, onClick}) => {
    return (
        <div
            className={cn(selected && styles.selected, styles.tab)}
            onClick={onClick}
        >
            <p>{weekday}</p>
            <p>{date}</p>
            <p>{maxTemp < 0 || "+"}{maxTemp}</p>
            <div className={styles.imgWrapper}>
                <img src={`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`}/>
            </div>
        </div>
    );
};

export default Tab;