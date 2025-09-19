import React, {useEffect, useState} from "react";
import styles from "./wDay.module.scss";

interface ComponentProps {
    index: string
    tempMax: number,
    tempMin: number,
    icon: number,
    date: string
}

export default function WDay({index, tempMax, tempMin, icon, date}: ComponentProps): React.JSX.Element {
    return (
        <div key={index} className={styles.wDay}>
            <span className={styles.wDay__date}>{date}</span>
            <div className={styles.wDay__block}>
                <div className={styles.wDay__block_temp}>{tempMax}<span className={styles.wDay__block_temp_с}>°C</span></div>
                <img src={`./images/png/weather/big/${icon}.png`} alt="иконка погоды"/>
                <div className={styles.wDay__block_temp}>{tempMin}<span className={styles.wDay__block_temp_с}>°C</span></div>
            </div>
        </div>
    )
}