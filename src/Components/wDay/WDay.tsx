import React from "react";
import styles from "./wDay.module.scss";

interface ComponentProps {
    key: number,
    tempMax: number,
    tempMin: number,
    icon: number
}

export default function WDay({key, tempMax, tempMin, icon}: ComponentProps): React.JSX.Element {
    return (
        <div key={key} className={styles.wDay}>
            <div className={styles.wDay__block}>
                <div className={styles.wDay__block_temp}>{tempMax}<span>°C</span></div>
                <img src={`./images/png/weather/big/${icon}.png`} alt="иконка погоды"/>
                <div className={styles.wDay__block_temp}>{tempMin}<span>°C</span></div>
            </div>
        </div>
    )
}