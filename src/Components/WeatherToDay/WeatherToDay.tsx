import React, { useContext } from "react";
import styles from "./weatherToDay.module.scss";
import { WeatherFiveDaysContent } from "../weather/Weather";

export default function WeatherToDay(): React.JSX.Element {
    const {data} = useContext(WeatherFiveDaysContent);
    const date = new Date;
    return (
        <div className={styles.weatherToDay}>
            <div className={styles.weatherToDay__date}>{date.toLocaleDateString()}</div>
            <div className={styles.weatherToDay__block}>
                <div className={styles.weatherToDay__block_temp}>
                    <span className={styles.weatherToDay__block_temp_times}>Днём</span>
                    <div className={styles.weatherToDay__block_temp_day}>
                        {Math.round(data[0].all_day.temperature_max)}
                        <span className={styles.weatherToDay__block_temp_day_c}>°C</span>
                    </div>
                </div>
                <div className={styles.weatherToDay__block_temp}>
                    <span className={styles.weatherToDay__block_temp_times}>Ночью</span>
                    <div className={styles.weatherToDay__block_temp_day}>
                        {Math.round(data[0].all_day.temperature_min)}
                        <span className={styles.weatherToDay__block_temp_day_c}>°C</span>
                    </div>
                </div>
            </div>
        </div>
    )
}