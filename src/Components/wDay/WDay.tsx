import React, {useEffect, useState} from "react";
import styles from "./wDay.module.scss";

interface ComponentProps {
    num: number
    tempMax: number,
    tempMin: number,
    icon: number,
    date: string
}

export default function WDay({num, tempMax, tempMin, icon, date}: ComponentProps): React.JSX.Element {
    const [numKey, setNumKey] = useState(num);
    useEffect(() => {
        setNumKey(num)
    }, [num])
    return (
        <div key={numKey} className={styles.wDay}>
            <span className={styles.wDay__date}>{date}</span>
            <div className={styles.wDay__block}>
                <div className={styles.wDay__block_temp}>{tempMax}<span className={styles.wDay__block_temp_с}>°C</span></div>
                <img src={`./images/png/weather/big/${icon}.png`} alt="иконка погоды"/>
                <div className={styles.wDay__block_temp}>{tempMin}<span className={styles.wDay__block_temp_с}>°C</span></div>
            </div>
        </div>
    )
}