import React from 'react';
import arrow from './arrow.svg';
import styles from './windDirection.module.css';



const WindDirection = ({angle}) => {
    return (
        <div className={styles.container}>
            <div id={styles.N} className={styles.letter}>N</div>
            <div id={styles.W} className={styles.letter}>W</div>
            <div id={styles.imageContainer} style={{transform: `rotate(${angle+180}deg)`}}>
                <img src={arrow}/>
            </div>
            <div id={styles.E} className={styles.letter}>E</div>
            <div id={styles.S} className={styles.letter}>S</div>
        </div>
    );
};

export default WindDirection;