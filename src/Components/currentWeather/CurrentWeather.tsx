import React, { useContext } from "react";
import styles from "./currentWeather.module.scss"
import { WeatherContext } from "../weather/Weather";

export default function CurrentWeather(): React.JSX.Element {
    const {resultToDo} = useContext(WeatherContext);
    console.log('resultToDo: ', resultToDo);
    return (
        <div className={styles.weather__block_now}>
            <h2 className={styles.weather__block_now_title}>Данные на текущий момент</h2>
            <div className={styles.weather__block_now_section}>
                <div className={styles.weather__block_now_section_cur}>
                    {Math.round(resultToDo.temperature)}
                    <span className={styles.weather__block_now_section_cur_c}>°C</span>
                    <img src={`./images/png/weather/big/${resultToDo.icon}.png`} alt="иконка погоды" 
                        className={styles.weather__block_now_section_cur_ico}
                    />  
                </div>
            </div>
            <div className={styles.weather__block_now_section}>
                <div className={styles.weather__block_now_section_wind}>Скорость ветра: {resultToDo.wind.speed}</div>
                <div className={styles.weather__block_now_section_wind}>Направление: {resultToDo.wind.dir}</div>
                <div className={styles.weather__block_now_section_wind}>Угол: {resultToDo.wind.angle}</div>
            </div>
        </div>
    )
}