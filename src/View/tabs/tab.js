import React from 'react';
import cn from "classnames";
import styles from './tab.module.css';

const Tab = ({day, maxTemp, weatherStateAbbr, selected, onClick}) => {
    return (
        <div className={cn(selected && styles.selected, styles.tab)} onClick={onClick}>
            <p>{day}</p>
            <p>{maxTemp}</p>
            <div className={styles.imgWrapper}>
                <img src={`https://www.metaweather.com/static/img/weather/${weatherStateAbbr}.svg`}/>
            </div>
        </div>
    );
};

export default Tab;