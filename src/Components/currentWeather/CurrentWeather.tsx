import React, { useContext } from "react";
import styles from "./currentWeather.module.scss"
import { WeatherFiveDaysContent } from "../weather/Weather";

export default function CurrentWeather(): React.JSX.Element {
    const {data} = useContext(WeatherFiveDaysContent);
    return (
        <div className={styles.weather__block_now}>
            <h2 className={styles.weather__block_now_title}>Данные на текущий момент</h2>
            <div className={styles.weather__block_now_section}>
                <div className={styles.weather__block_now_section_cur}>
                    {Math.round(data[0].all_day.temperature)}
                    <span className={styles.weather__block_now_section_cur_c}>°C</span>
                    <img src={`./images/png/weather/big/${data[0].all_day.icon}.png`} alt="иконка погоды" 
                        className={styles.weather__block_now_section_cur_ico}
                    />  
                </div>
            </div>
            <div className={styles.weather__block_now_section}>
                <div className={styles.weather__block_now_section_wind}>Скорость ветра: {data[0].all_day.wind.speed}</div>
                <div className={styles.weather__block_now_section_wind}>Направление: {data[0].all_day.wind.dir}</div>
                <div className={styles.weather__block_now_section_wind}>Угол: {data[0].all_day.wind.angle}</div>
            </div>
        </div>
    )
}